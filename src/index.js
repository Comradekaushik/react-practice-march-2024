import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./style/div-top.css";
import App from './App';
import "./index.css";
import Numberchange from './Usestate/practice-usestate';
import ClicktoChange from './Usestate/Click-change';
import ArrayStrings from './Usestate/render-string-array';
import Profile from './Usestate/comple-object-usestate';
import Star from './components/Star';


import Memecomponent from './Usestate/meme';

import {BrowserRouter ,Routes,Route, Link} from "react-router-dom";

import Boxescontainer from './Usestate/passing-state-data-to-child/boxes';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));


// root.render(<>
//     <Divtop/>
// </>)
// root.render(<>{Cards}</>);

// root.render(<>
//     <Numberchange/>
//     <ClicktoChange/>
// </>)

// root.render(<>
//     {/* <Boxescontainer valueParent={55}/> */}
//     <Boxescontainer/>
// </>)
root.render(<>
    <App/>
    
</>)

reportWebVitals();
