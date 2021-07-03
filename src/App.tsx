import React from 'react';
import Counter from './Counter';

interface AppProps {
  message?: string;
}
const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div><Counter /></div>;
};

App.defaultProps = {
  message: 'default props',
  // description: 'this is app component' AppPropsにないとエラー
}
// const App: = ({ message }: AppProps)
// これだとエラーにならない。ランタイム中でないと気づけない

export default App;
