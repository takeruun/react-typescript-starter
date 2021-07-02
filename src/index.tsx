import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

type Foo = JSX.IntrinsicAttributes;

// Appコンポーネントにmessageを受け入れをしなくても、keyはエラーにならない。
// <App message="hello react!" key="1" />
// JSX.IntrinsicAttributes で keyオプショナルだから
ReactDOM.render(<App message="hello react!" />, document.getElementById('root'));
