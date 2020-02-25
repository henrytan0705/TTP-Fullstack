import React from 'react';
import SplashContainer from './splash/splash_container'
import { AuthRoute } from '../utils/route_util';

const App = () => {
    return (
        <>
            <AuthRoute exact path="/" component={SplashContainer}/>
            {/* <AuthRoute exact path="/login" component={SplashContainer} /> */}
            {/* <AuthRoute exact path="/signup" component={SplashContainer} /> */}

        </>
    )
};

export default App;