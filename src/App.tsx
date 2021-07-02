import React from 'react';

interface AppProps {
  message: string;
}
const App = ({ message }: AppProps) => {
  return <div>React Starter Kit in TypeScript  {message} </div>;
};

export default App;
