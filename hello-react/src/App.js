import logo from './logo.svg';
import './App.css';
import { Component, Fragment } from 'react';
// import MyComponent from './component/MyComponent';
// import Counter from './component/Counter';
// import Say from './component/Say';
import EventPractice from './components/EvnetPractice';
import FuncEventPracice from './components/FuncEventPractice';
import ValidationSample from './components/ValidationSample';
import ScrollBox from './components/ScrollBox';
import IterationSample from './components/IterationSample'
import LifeCycleSample from './components/LifeCycleSample';
import ErrorBoundary from './error/ErrorBoundary';

// ! chapter 7
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

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
  // render() {
  //   return (
  //     <div>
  //       <ScrollBox ref={(ref) => this.scrollBox = ref} />
  //       <button onClick={() => this.scrollBox.scrollToBottom()}> 밑으로</button>
  //     </div >
  //   )
  // }

  //! Chapter 6
  // render() {
  //   return (
  //     <IterationSample />
  //   );
  // }

  // ! chapter 7

  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    )
  }
}

export default App;
