import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../App';
import state, { addMessage } from './state';
import { addPost } from './state';
import '../index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

export const rerenderEntireTree = () => {
    console.log('!!! вызвали rerenderEntireTree');
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} addMessage={addMessage} />
        </React.StrictMode>
    );
}


