import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom';
import CoverNav from '../CoverNav/CoverNav';
import Library from '../Library/Library';
import Navbar from '../Navbar/Navbar';
import './Home.scss';

function Home() {
    const userId = JSON.parse(sessionStorage.getItem('userId'))
    console.log(userId);
    const [isCoverScrolled, setIsCoverScrolled] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
        setIsCoverScrolled(true);
        } else {
        setIsCoverScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);
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
                <CoverNav isCoverScrolled={isCoverScrolled}/>
                <Outlet/>
            </div>
        </div>
    </div>
    )
}

export default Home