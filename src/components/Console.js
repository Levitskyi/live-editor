import React from 'react';

const Console = ({ text }) => {
    const [item] = text;
    const output = item && item.message ? item.message : JSON.stringify(item);
    return (
        <div className="console-output">
            <pre><output>{output}</output></pre>
        </div>
    );
}

export default Console;
