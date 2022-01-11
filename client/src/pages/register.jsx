import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Register()
{
    const handleRegister = () => 
    {
        fetch('http://localhost:8080/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        });
    }
    return (
        <div>
            <Header />
            <section id="registerSection">
                <form method='post' action="http://localhost:8080/register">
                    <label htmlFor="fname">First Name:</label>
                    <input name="fname" id="fname" type="text" />

                    <label htmlFor="lname">Last Name:</label>
                    <input name="lname" id="lname" type="text" />

                    <label htmlFor="email">Email:</label>
                    <input name="email" id="email" type="text" />

                    <label htmlFor="password">Password:</label>
                    <input name="password" id="password" type="password" />

                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input name="confirmPassword" id="confirmPassword" type="password" />

                    <button onSubmit={handleRegister} type='submit'>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}