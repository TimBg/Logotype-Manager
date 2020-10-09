import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import { MainPage } from './pages/MainPage/MainPage';
import { LogoPage } from './pages/LogoPage/LogoPage';


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='main'>
                <Route exact path='/' render={() => (<MainPage store={props.store} />)} />
                <Route path='/logo/:id' render={() => (<LogoPage store={props.store} />)} />
            </div>
        </BrowserRouter>
    );
}

export default App;
