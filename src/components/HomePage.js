import React from 'react';
import io  from '../services/SocketService';
import uuid  from 'uuid';

function HomePage() {

    const handleClick = () => {
        io.connect();
        const id = uuid.v1();
        io.socket.emit('createRoom', id);
    };

    return (
        <div className="app">
            homepage
            <button onClick={handleClick}>Create room</button>
        </div>
    );
}

export default HomePage;
