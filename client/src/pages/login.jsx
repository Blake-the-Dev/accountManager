import React, { Component } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordError: '',
            emailError: ''
        };
    };

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
        } else {
            this.setState({
                emailError:
                    email.includes("@") ? null : 'invalid email'
            });
        }
        if (!this.state.email.includes(".com")) {
            emailError = "Invalid Email: Missing '.com'";
        } else {
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

        if (!this.state.password) {
            passwordError = "Password cannot be left blank"
        }
        {
            this.setState({
                passwordError:
                    password.length >= 8 ? null : 'Password must be longer than or equal to 8 characters'
            });
        }
        if (passwordError) {
            this.setState({ passwordError });
            return false;
        }
        return true;
    }
    //form input and errors are cleared after submitting
    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validateEmail();
        this.validateEmail();
        if (isValid) {
            const { emailError, passwordError } = "";

            this.setState({ emailError, passwordError })
        }
    };

    render() {
        return (
            <div>
                <Header />
                <h1>test</h1>
                <section id="loginSection">
                    <form>
                        <label htmlFor="email">Email:</label>
                        <input name="email" type="text"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                            onBlur={this.validateEmail}
                        />
                        <div className='invalid-feedback '>{this.state.emailError}</div>

                        <label htmlFor="password">Password:</label>
                        <input type="password" 
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                            onBlur={this.validatePassword}
                        />
                        <div className='invalid-feedback'>{this.state.passwordError}</div>

                        <button type='submit' onSubmit={this.handleSubmit}>Submit</button>
                    </form>
                </section>
                <Footer />
            </div>
        );
    }
}

// export default function Login()
// {

//     const handleLogin = () => {
//         fetch('http://localhost:8080/login', {
//             method: 'post',
//             headers: { 'Content-Type': 'application/json' }
//         });
//     }

//     var validateEmail = (email) => {
//         if (validator.isEmpty(email)) 
//         {
//             return 'Email is required';
//         } 
//         else if (!validator.isEmail(email)) 
//         {
//             return 'Invalid Email';
//         }
//         return false;
//     }
    

//     return (
//         <div>
//             <Header />
//             <h1>test</h1>
//             <section id="loginSection">
//                 <form onsubmit={handleLogin}>
//                     <label htmlFor="email">Email:</label>
//                     <input name="email" type="text"
//                         onchange={validateEmail} 
//                     />


//                     <button type='submit'>Submit</button>
//                 </form>
//             </section>
//             <Footer />
//         </div>
//     );
// }