import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state;
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.logout;
    }

    render(){
        let display;

        if (this.props.url === "splash") {
            display = (
                 <div>
                    <Link className="navbar-login-button" to="/login">
                        Sign In
                    </Link>

                    <Link className="navbar-register-button" to="/signup">
                        Register
                    </Link>
                </div>
            )
        } 
        else if (this.props.url === "form") {
            display = (
                <div>
                    <Link to="/">
                        Home
                    </Link>
                </div>
            )
        } 
        else {
            display = (
                <div>
                    <Link to="/portfolio">
                        Portfolio
                    </Link>

                    <Link to="/transactions">
                        Transactions
                    </Link>

                    <Button onClock={this.props.logout}></Button>
                </div>
            )
        }

        return (
            <>
                {display}
            </>
        )
       
    }
}

export default Navbar;