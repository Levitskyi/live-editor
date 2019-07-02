import io from 'socket.io-client';

class SocketService {
    constructor() {
        this.socket = 123;
    }

    connect() {
        console.log(this);
        this.socket = io.connect('http://localhost:4000/');
    }

    emitMessage = (value) => {
        this.socket.emit('mess', value);
    };

    emitRun = (value) => {
        this.socket.emit('run', value);
    }

}

export default new SocketService();
