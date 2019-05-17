import React, { useState } from 'react';
import './App.css';
import MonacoEditor from './components/MonacoEditor';
import Console from './components/Console';

console.stdlog = console.log.bind(console);
console.logs = [];
console.log = function(){
  console.logMap = Array.from(arguments);
  console.stdlog.apply(console, arguments);
};

function App() {
  const [text, setText] = useState('');

  const onChange = (value, e) => {
    console.logMap = '';
    try {
      // eslint-disable-next-line no-eval
      eval(value);
    } catch(error) {
      console.log(error);
    }
    setText(console.logMap);
  };

  return (
    <div className="app">
      <MonacoEditor onChange={onChange}/>
      <Console text={text}/>
    </div>
  );
}

export default App;
