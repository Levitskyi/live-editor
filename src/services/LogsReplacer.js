import ConsoleService from './ConsoleService';

console.stdlog = console.log.bind(console);
console.logs = [];
console.log = (...args) => {
    const firstPart = (new Error()).stack.split('<anonymous>')[2];
    const lineNumber = firstPart && firstPart.split(':')[1];
    console.logs.push({ lineNumber, message: args });
    ConsoleService.notify([...console.logs]);
};
