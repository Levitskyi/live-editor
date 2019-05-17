import React, { useState } from 'react';
import './App.css';
import MonacoEditor from './components/MonacoEditor';
import Console from './components/Console';
import io from 'socket.io-client';
import lodash from 'lodash';

console.stdlog = console.log.bind(console);
console.logs = [];
console.log = (...args) => {
  console.logs.push(args);
};

let socket;

const runCode = (code) => {
  console.logs = [];
  try {
    // eslint-disable-next-line no-eval
    eval(code);
  } catch(error) {
    console.log(error);
  }
};

function App() {
  const [output, setOutput] = useState('');
  const [text, setText] = useState('');
  const debounced = lodash.debounce(() => setOutput(console.logs), 700);

  const onChange = (value, e) => {
    runCode(value);
    debounced();
    socket.emit('mess', value);
    setText(value);
  };

  const editorDidMount = (editor) => {
    socket = io.connect('http://192.168.0.102:4000/');

    const getFromSocket = (data) => {
      const viewState = editor.saveViewState();
      setText(data);
      runCode(data);
      debounced();
      editor.restoreViewState(viewState);
    };

    socket.on('text', getFromSocket);
    socket.on('newUser', (data) => {
      setText(data);
      runCode(data);
      debounced();
    });
  };

  return (
    <div className="app">
      <MonacoEditor value={text} onChange={onChange} editorDidMount={editorDidMount} />
      <Console output={output}/>
    </div>
  );
}

export default App;
