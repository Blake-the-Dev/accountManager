import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            emailError: '',
            password: '',
            passwordError: ''
        }
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value }, () => {
            this.validateEmail();
        });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value }, () => {
            this.validatePassword();
        });
    };

    validateEmail = () => {
        let emailError = "";
        const { email } = this.state;

        if (!this.state.email.includes("@")) {
            emailError = "Invalid Email: Missing '@'";
        } 
        else 
        {
            this.setState({
                emailError:
                    email.includes("@") ? null : 'invalid email'
            });
        }

        if (!this.state.email.includes(".com")) {
            emailError = "Invalid Email: Missing '.com'";
        } 
        else 
        {
            this.setState({
                emailError:
                    email.includes(".com") ? null : 'invalid email'
            });
        }

        if (!this.state.email) {
            emailError = "Email cannot be left blank"
        }

        if (emailError) {
            this.setState({ emailError });
            return false;
        }

        return true;
    }

    validatePassword = () => {
        let passwordError = "";
        const { password } = this.state;

        if (this.state.password.length < 4) {
            passwordError = "Password must be at least 4 characters"
        }
        else
        {
            this.setState({
                passwordError:
                    password.length >= 4 ? null : 'Password must be longer than or equal to 4 characters'
            });
        }

        if (!this.state.password) {
            passwordError = "Password cannot be left blank"
        }
        
        if (passwordError) {
            this.setState({ passwordError });
            return false;
        }
        return true;
    }

    handleSubmit = event =>
    {
        event.preventDefault();
        
        let loginData = {
            email: this.state.email,
            password: this.state.password
        };

       if(this.validateEmail() && this.validatePassword())
       {
           fetch('http://localhost:8080/login', {
               method: 'post',
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify(loginData),
           })
            .then(console.log(loginData));
       }
       else
       {
           console.log("Not logged in");
       }
        
    };      
    
    render() {
    return (
        <div>
            <Header />
            <section id="loginSection">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        onBlur={this.validateEmail}
                    />
                    <div>{this.state.emailError}</div>

                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" type="password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                        onBlur={this.validatePassword}
                    />
                    <div>{this.state.passwordError}</div>

                    <button type='submit'>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    )
}}