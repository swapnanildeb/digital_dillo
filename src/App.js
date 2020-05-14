import React from 'react';
import logo from './images/background_trans.png'
import './App.css';

import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Monoton', 'Regular', 'Iceland', 'Pacifico', "Press Start 2P", 'Audiowide', 'Vampiro One']
    }
});

//change logo?




function App() {
    return (
        <div id="background">

                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <div id="container">

                    <div id="left">
                        <p><a href="https://en.wikipedia.org/wiki/Red">
                            RED
                        </a></p>
                    </div>

                    <div id="right">
                        <p><a href="https://en.wikipedia.org/wiki/Blue">
                            BLUE
                        </a></p>
                    </div>
                    {/*<p><a href="https://en.wikipedia.org/wiki/Red">*/}
                        {/*RED*/}
                    {/*</a></p>*/}

                    {/*<p><a href="https://en.wikipedia.org/wiki/Blue">*/}
                        {/*BLUE*/}
                    {/*</a></p>*/}

                    {/*<p><a href="https://en.wikipedia.org/wiki/Yellow">*/}
                        {/*Yellow*/}
                    {/*</a></p>*/}

                    {/*<p><a href="https://en.wikipedia.org/wiki/Green">*/}
                        {/*GREEN*/}
                    {/*</a></p>*/}

                    {/*<p><a href="https://en.wikipedia.org/wiki/Orange_(colour)">*/}
                        {/*ORANGE*/}
                    {/*</a></p>*/}

                    {/*<p><a href="https://en.wikipedia.org/wiki/Violet_(color)">*/}
                        {/*VIOLET*/}
                    {/*</a></p>*/}

                </div>
        </div>
    );
}





export default App;

