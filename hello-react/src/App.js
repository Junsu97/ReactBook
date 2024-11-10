import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
// import MyComponent from './component/MyComponent';
// import Counter from './component/Counter';
// import Say from './component/Say';
import EventPractice from './component/EvnetPractice';
import FuncEventPracice from './component/FuncEventPractice';
import ValidationSample from './component/ValidationSample';
import ScrollBox from './component/ScrollBox';

// function App() {
class App extends Component {
  // const name = undefined;
  //! Chapter 2
  // descriptions : Component와 props 설명 
  // return <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
  // descriptions : Class형 컴포넌트에서 state 설명 
  // return <Counter />;
  // descriptions : 함수형 컴포넌트에서 useState 설명 

  //! Chapter3
  // return <Say />;

  //! Chapter4
  // return <EventPractice /> 
  // return <FuncEventPracice />

  //! Chapter5
  // return <ValidationSample />
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}> 밑으로</button>
      </div >
    )
  }
}

export default App;
