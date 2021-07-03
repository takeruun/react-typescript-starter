import React, { useEffect, useRef, useState } from 'react';

//type MySetStateAction = number | ((prevState: number) => number);
//type MyDispatch = (value: MySetStateAction) => void

const Counter: React.FC<{}> = () => {
  const initialState: any = 0
  // useStateに型を与えれる
  // 与えた型で処理が進む
  const [value, setValue] = useState<number>(initialState);

  const increment = () => {
    setValue((prevState) => prevState + 1);
  }

  const decrement = () => {
    setValue(value - 1);
  }

  const renderTimes = useRef(0);
  // const renderTimes = useRef<number>(0);
  useEffect(() => {
    console.log('useEffect');
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times</div>
    </div>
  );
}

export default Counter;