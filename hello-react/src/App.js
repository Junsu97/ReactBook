import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import MyComponent from './component/MyComponent';
import Counter from './component/Counter';
import Say from './component/Say';

function App() {
  const name = undefined;
  //! Chapter 2
  // descriptions : Component와 props 설명 
  // return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
  // descriptions : Class형 컴포넌트에서 state 설명 
  // return <Counter />;
  // descriptions : 함수형 컴포넌트에서 useState 설명 
  return <Say />;
}

export default App;
