import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './components/Nav';
import EmployeeRegister from './containers/EmployeeRegister';
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Nav />
        <EmployeeRegister />
    </React.StrictMode>
);