import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home()
{
    return (
        <div>
            <Header />
            <section id='homeSection'>
                <button><a href="/Login">Login</a></button>
                <button><a href="/Register">Register</a></button>
                <button>Logout</button>
            </section>
            <Footer />
        </div>
    );
}