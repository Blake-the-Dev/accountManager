import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Register()
{
    return (
        <div>
            <Header />
            <section id="registerSection">
                <form action="post">
                    <label htmlFor="fname">First Name:</label>
                    <input type="text" />
                    <label htmlFor="lname">Last Name:</label>
                    <input type="text" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" />
                    <label htmlFor="password">Password:</label>
                    <input type="text" />
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input type="text" />
                    <button>Submit</button>
                </form>
            </section>
            <Footer />
        </div>
    );
}