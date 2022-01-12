import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Register()
{
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleChange = ({ target }) => {
        switch(target.name){
            case "fname":
                setFname(target.value);
                break;
            case "lname":
                setLname(target.value);
                break;
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            case "confirmPassword":
                setConfirmPassword(target.value);
                break;
            default:
                return;
        }
    }

    const clearForm = () => {
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    }

    const handleSubmit = (event) => 
    {

        event.preventDefault();
        let registerData = {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        }

        fetch('http://localhost:8080/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(registerData),
        })
        .then(clearForm())
        .then((response) => response.json())
        .then(console.log);
    }

    return (
        <div>
            <Header />
            <section id="registerSection">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="fname">First Name:</label>
                    <input name="fname" id="fname" type="text" 
                    value={fname}
                    onChange={handleChange}
                    />

                    <label htmlFor="lname">Last Name:</label>
                    <input name="lname" id="lname" type="text" 
                    value={lname} 
                    onChange={handleChange}
                    />

                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text" 
                    value={email} 
                    onChange={handleChange}
                    />

                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" type="password" value={password}
                    onChange={handleChange}
                    />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input name="confirmPassword" id="confirmPassword" type="password" 
                    value={confirmPassword} 
                    onChange={handleChange}
                    />

                    <button type='submit'>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}