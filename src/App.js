import React, { useState } from 'react';
import './App.css';
import MonacoEditor from './components/MonacoEditor';
import Console from './components/Console';
import io from 'socket.io-client';
import lodash from 'lodash';

console.stdlog = console.log.bind(console);
console.logs = [];
console.log = (...args) => {
  const firstPart = (new Error()).stack.split('<anonymous>')[1];
  const lineNumber = firstPart && firstPart.split(':')[1];
  console.logs.push({ lineNumber, message: args });
};

let socket;

function App() {
  const [output, setOutput] = useState('');
  const [text, setText] = useState('');
  const debounced = lodash.debounce(() => setOutput(console.logs), 700);

  const onChange = (value, e) => {
    // runCode(value);
    // debounced();
    socket.emit('mess', value);
    setText(value);
  };

  const editorDidMount = (editor) => {
    socket = io.connect('https://live-editor.herokuapp.com/');

    const getFromSocket = (data) => {
      const viewState = editor.saveViewState();
      setText(data);
      // runCode(data);
      // debounced();
      editor.restoreViewState(viewState);
    };

    socket.on('text', getFromSocket);
    socket.on('newUser', (data) => {
      setText(data);
      // runCode(data);
      // debounced();
    });
  };

  return (
    <div className="app">
      <MonacoEditor value={text} onChange={onChange} editorDidMount={editorDidMount} />
      <Console code={text} logs={output}/>
    </div>
  );
}

export default App;
