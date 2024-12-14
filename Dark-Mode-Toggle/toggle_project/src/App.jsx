/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

const App = () => {
    return (
        <ThemeProvider>
            <div className="App">
                <ThemeToggle />
            </div>
        </ThemeProvider>
    );
};

export default App;
