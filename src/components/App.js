import React, { useEffect, useState } from 'react';
import MonacoEditor from './MonacoEditor';
import Console from './Console';
import io  from '../services/SocketService';

function App() {
  const [text, setText] = useState('');

  const onChange = (value) => {
    io.emitMessage(value);
    setText(value);
  };

  useEffect(() => {
    console.stdlog('connected app');
  }, []);

  const editorDidMount = (editor) => {
    const getFromSocket = (data) => {
      const viewState = editor.saveViewState();
      setText(data);
      editor.restoreViewState(viewState);
    };

    io.socket.on('text', getFromSocket);
    io.socket.on('newUser', (data) => {
      setText(data.text);
    });
  };

  return (
    <div className="app">
      <MonacoEditor value={text} onChange={onChange} editorDidMount={editorDidMount} />
      <Console code={text} />
    </div>
  );
}

export default App;
