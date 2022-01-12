import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleChange = ({ target }) => {
        switch(target.name){
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            default:
                return;
        }
    };

    // const validateEmail = () => {
    //     let emailError = "";
        
    //     if(!this.state.email)
    //     {
    //         emailError = "Email cannot be empty";
    //         return false;
    //     }
    //     else if(!this.state.email.includes("@"))
    //     {
    //         emailError = "Email must contain an @";
    //         return false;
    //     }
    //     else if (!this.state.email.includes(".com"))
    //     {
    //         emailError = "Invalid Email: Missing '.com'";
    //         return false;
    //     }
    //     return true;
    // }


    const clearForm = () => {
        setEmail("");
        setPassword("");
    };

    const handleSubmit = (event) =>
    {
        event.preventDefault();
        let loginData = {
            email: email,
            password: password
        }

        fetch('http://localhost:8080/login', 
        {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData),
        })

        .then(clearForm())
        .then((response) => response.json())
        .then(console.log);        
    }

    return (
        <div>
            <Header />
            <section id="loginSection">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text"
                        value={email}
                        onChange={handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" type="password"
                      value={password}
                      onChange={handleChange}
                    />

                    <button type='submit'>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    )
}