import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';
import Test from './component/Test';

function App() {
  const name = undefined;

  return (
    // description : <Fragment> 태그는 리액트 v16 이상에서 사용가능한 태그로 <> 와 같다
    <div className='react' >
      {name || '리액트'}
      <Test></Test>
    </div>
  );
}

export default App;
