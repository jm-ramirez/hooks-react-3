import React from 'react';
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { About } from '../components/About';
import { Articles } from '../components/Articles';
import { Contact } from '../components/Contact';
import { Index } from '../components/Index';
import { Login } from '../components/Login';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            {/* NAVIGATION MENU */}
            <header className='header'>
                <nav>
                    <div className='logo'>
                        <h2>Apply React Context</h2>
                    </div>
                    <ul>
                        <li>
                            <NavLink to='/'>Index</NavLink>
                        </li>
                        <li>
                            <NavLink to='/articles'>Articles</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>About</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to='/login'>Login</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* RUTH SETTINGS */}

            <section className='content'>
                <Routes>
                    <Route path='/' element={<Index/>} />
                    <Route path='/index' element={<Index/>} />
                    <Route path='/articles' element={<Articles/>} />
                    <Route path='/contact' element={<Contact/>} />
                    <Route path='/login' element={<Login/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='*' element={
                        (<div>
                            <h1>ERROR - THIS PAGE DOES NOT EXIST</h1>
                        </div>)
                    } />
                </Routes>
            </section>
        </BrowserRouter>
    )
}
