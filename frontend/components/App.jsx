import React from 'react';
import { Route } from 'react-router-dom';
import SplashContainer from './splash/splash_container'

const App = () => {
    return (
        <>
            <Route exact path="/" component={SplashContainer}/> 
        </>
    )
};

export default App;