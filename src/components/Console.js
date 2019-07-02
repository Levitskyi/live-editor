import React, { useEffect, useState } from 'react';
import ConsoleService from '../services/ConsoleService';
import io from '../services/SocketService';

const Console = ({ code }) => {
    const [output, setOutput] = useState(null);

    const runCode = () => {
        console.logs = [];
        try {
            // eslint-disable-next-line no-eval
            eval(code);
        } catch(error) {
            console.log(error);
        }
        setOutput([...console.logs]);
    };

    useEffect(() => {
        ConsoleService.subscribe(setOutput);
        io.socket.on('run', runCode);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleOnRun = () => {
        runCode();
        io.emitRun('bla');
    };

    const clearLogs = () => {
        setOutput(null);
        console.logs = [];
    };

    const definedOutput = output;

    return (
        <div className="console-output">
            <div className="actions">
                <button onClick={handleOnRun}>RUN</button>
                <button onClick={clearLogs}>CLEAR</button>
            </div>
            <pre>
                {
                    definedOutput && definedOutput.map((element, index) => {
                        const { message, lineNumber } = element;
                        const [item] = message;
                        const mes =  message.length > 1 ? message : message[0];
                        const lastMes = mes === undefined ? 'undefined' : JSON.stringify(mes);
                        const text = item && item.message ? item.message : lastMes;
                        return (
                            <output className="output" key={index}>
                                {text}
                                <span className="sticky-text">{ lineNumber && `line:${lineNumber}`}</span>
                            </output>
                        )
                    })
                }
            </pre>
        </div>
    );
}

export default Console;
