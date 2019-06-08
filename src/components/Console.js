import React, { useEffect, useState } from 'react';
import ConsoleService from '../ConsoleService';

const Console = ({ logs, code }) => {
    const [output, setOutput] = useState(null);
    const [liveReload, setLiveReload] = useState(true);

    useEffect(() => {
        ConsoleService.subscribe(setOutput);
    },[]);

    const onLiveReloadChange = () => {
        setOutput(null);
        setLiveReload(!liveReload);
    };

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

    const clearLogs = () => {
        setOutput(null);
        console.logs = [];
    };

    const definedOutput = output;
    // const definedOutput = !liveReload ? output : logs;

    return (
        <div className="console-output">
            <div className="actions">
                <button onClick={runCode}>RUN</button>
                <button onClick={clearLogs}>CLEAR</button>
                {/*<label>*/}
                {/*    <input checked={liveReload} onChange={onLiveReloadChange} type="checkbox"/>*/}
                {/*    live reload*/}
                {/*</label>*/}
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
