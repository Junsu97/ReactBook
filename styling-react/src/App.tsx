import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
// import SassComponent from './components/SassComponent';
// import CSSModule from './components/CSSModule';
import StyledComponent from './components/StyledComponent';

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="App">
      <StyledComponent />
    </div>
  );
}

export default App;
