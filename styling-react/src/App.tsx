import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import SassComponent from './components/SassComponent';

function App() {
  const [value, setValue] = useState<number>(0);
  return (
    <div className="App">
      <SassComponent />
    </div>
  );
}

export default App;
