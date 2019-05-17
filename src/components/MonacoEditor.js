import React from 'react';
import Editor from 'react-monaco-editor';

const MonacoEditor = ({onChange, value, editorDidMount}) => {
    const options = {
        selectOnLineNumbers: true,
        automaticLayout: true
    };
    return (
        <Editor
            width="60%"
            language="javascript"
            theme="vs-dark"
            options={options}
            onChange={onChange}
            value={value}
            editorDidMount={editorDidMount}
        />
    );
}

export default MonacoEditor;
