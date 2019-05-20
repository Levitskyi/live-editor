import React, { useState } from 'react';

const Console = ({ logs }) => {
    const [output, setOutput] = useState(null);
    const [liveReload, setLiveReload] = useState(true);

    const onLiveReloadChange = () => {
        setOutput(null);
        setLiveReload(!liveReload);
    };

    const definedOutput = !liveReload ? output : logs;

    return (
        <div className="console-output">
            <div className="actions">
                {!liveReload && <button onClick={() => setOutput(console.logs)}>RUN</button>}
                <button onClick={() => setOutput(null)}>CLEAR</button>
                <label>
                    <input checked={liveReload} onChange={onLiveReloadChange} type="checkbox"/>
                    live reload
                </label>
            </div>
            <pre>
                {
                    definedOutput && definedOutput.map((element, index) => {
                        const [item] = element;
                        const text = item && item.message ? item.message
                            : JSON.stringify(
                                element.length > 1 ? element : element[0]
                            );
                        return (
                            <output className="output" key={index}>
                                {text}
                            </output>
                        )
                    })
                }
            </pre>
        </div>
    );
}

export default Console;
