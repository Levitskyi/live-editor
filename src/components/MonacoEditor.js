import React from 'react';
import Editor from 'react-monaco-editor';

const MonacoEditor = ({onChange}) => {
    const options = {
        selectOnLineNumbers: true,
        automaticLayout: true
    };
    return (
        <Editor
            width="800"
            language="javascript"
            theme="vs-dark"
            options={options}
            onChange={onChange}
        />
    );
}

export default MonacoEditor;
