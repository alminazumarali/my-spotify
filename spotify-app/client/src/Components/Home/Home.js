import React from 'react';
import { Outlet } from 'react-router-dom';
import CoverNav from '../CoverNav';
import Library from '../Library';
import Navbar from '../Navbar';
import './Home.scss';

function Home() {
    const userId = JSON.parse(sessionStorage.getItem('userId'))
    console.log(userId);
    return (
            <div className='app-container'>
        <section className='section-home'>
            <div className='back-div'></div>
            <div className='back-div'></div>
            <div className='back-div'></div>
        </section>
        <div className='content-home'>
            <div className='nav-lib'>
                <Navbar/>
                <Library/>
            </div>
            <div className='header-outlet'>
                <CoverNav/>
                <Outlet/>
            </div>
        </div>
    </div>
    )
}

export default Home