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

            {/* RUTH SETTINGS */}

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
        </BrowserRouter>
    )
}
