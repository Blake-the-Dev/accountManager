import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Login()
{
    return (
        <form action="post">
            <label htmlFor="email">Email:</label>
            <input type="text" />
            <label htmlFor="password">Password:</label>
            <input type="text" />
            <button>Submit</button>
        </form>
    );
}