import React from 'react';
import SplashContainer from './splash/splash_container'
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';

import { AuthRoute } from '../utils/route_util';

const App = () => {
    return (
        <>
            <AuthRoute exact path="/" component={SplashContainer}/>
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />

        </>
    )
};

export default App;