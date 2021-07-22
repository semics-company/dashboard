import React from 'react';
import ReactDOM from 'react-dom';
import App from './Routes/App';
import "./Styles/Main.css";
import TodosProvider from "./Context/TodosProvider";

ReactDOM.render(
    <React.StrictMode>
        <TodosProvider>
            <App />
        </TodosProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

