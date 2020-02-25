import React from 'react';
// import { Link } from 'react-router-dom';
import NavbarSplashContainer from '../navbar/navbar_splash_container';

class Splash extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <>
                <NavbarSplashContainer />
                <div className="splash-body">
                    <h1>Splash Page</h1>

                </div>

            </>
        )
    }
}

export default Splash;