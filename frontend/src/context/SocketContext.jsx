
import { createContext, useEffect } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

// const socket = io(`${import.meta.env.VITE_BASE_URL}`);

const socketURL = import.meta.env.VITE_BASE_URL || 'http://localhost:4000';
console.log("Socket connecting to:", socketURL);

const socket = io(socketURL);

const SocketProvider = ({ children }) => {
    useEffect(() => {
        
        socket.on('connect', () => {
            console.log('Connected to server');
        });

        socket.on('disconnect', () => {
            console.log('Disconnected from server');
        });

    }, []);



    return (
        <SocketContext.Provider value={{ socket }}>
            {children}
        </SocketContext.Provider>
    );
};

export default SocketProvider;