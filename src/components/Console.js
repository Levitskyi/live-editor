import React from 'react';

const Console = ({ output }) => {
    return (
        <div className="console-output">
            <pre>
                {
                    output && output.map((element, index) => {
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
