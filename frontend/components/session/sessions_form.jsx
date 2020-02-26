import React from 'react';
import { Link } from 'react-router-dom';
import NavbarFormContainer from '../navbar/navbar_form_container';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.formAction(user)
    }

    update(field) {
        return (e) => {
            this.setState({ [field]: e.target.value })
        }
    }

    demoLogin(e){
        e.preventDefault();

        const user = {
            email: "demo@gmail.com",
            password: "asdf1234"
        }

        this.props.formAction(user);
    }

    render() {
        const formlink = this.props.formType === "Sign In" ? "/signup" : "/login";
        const formButton = this.props.formType === "Sign In" ? "Sign in" : "Register"; 
        const redirectLink = this.props.formType === "Sign In" ? "Register" : "Sign in" ; 
        let nameForm;
        let demoButton;

        if (this.props.formType === "Sign Up") {
            nameForm = (
                <div>
                    <label> 
                        <input type="text" 
                        value={this.state.name}
                        onChange={this.update("name")}
                        placeholder="Name"
                        required/>
                    </label>
                </div>
            )
        }else {
            demoButton = (
                <button onClick={this.demoLogin}>
                    DEMO LOGIN
                </button>
            )
        }

        return (
            <>
                <NavbarFormContainer />

                <div>
                    <div>
                        <div>
                            <h1> {formButton}</h1>
                            <form onSubmit={this.handleSubmit}>

                                {nameForm}

                                <div>
                                    <div>
                                        <label>
                                            <input type="email" 
                                            value={this.state.email}
                                            onChange={this.update("email")}
                                            placeholder="Email"
                                            required />
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label>
                                            <input type="password" 
                                            value={this.state.password}
                                            onChange={this.update("password")}
                                            placeholder="Password"
                                            required/>
                                        </label>

                                    </div>
                                </div>

                                <button
                                    className=""
                                    type="submit">
                                    {formButton}
                                </button>

                                <span>
                                    <Link
                                        className=""
                                        to={formlink}
                                        onClick={this.props.clearErrors}>
                                        {redirectLink}
                                    </Link>
                                </span>

                                {demoButton}

                            </form>

                           
                        </div>
                    </div>

                </div>
            </>
        )
    }
}

export default SessionForm;