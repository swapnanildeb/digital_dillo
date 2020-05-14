import React from 'react';
import logo from './images/background_trans.png'
import './App.css';
import Popup from './popup'


//change logo?




function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Popup/>
                <img src={logo} className="App-logo" alt="logo" />
            </header>
        </div>
    );
}





export default App;

