import React,{useState} from 'react';
import {BsSpotify} from 'react-icons/bs';
import {GoHome} from 'react-icons/go';
import {GoHomeFill} from 'react-icons/go';
import {BiSearch} from 'react-icons/bi';
import {BiSearchAlt} from 'react-icons/bi';
import './navbar.scss';
import {Button} from '@mui/base/Button';
import {useNavigate} from 'react-router-dom';
function Navbar({userId}) {
    const [selectedButton, setSelectedButton] = useState('Home');
    const navigate = useNavigate();
    return (
    <div className='navbar'>
        <div className='child'><BsSpotify className='logo' /> My-Spotify</div>
        <div>
            <Button className='button2' onClick={() => { setSelectedButton('Home'); navigate('/home') }}>
            {selectedButton === 'Home' ? <GoHomeFill/> : <GoHome />} Home
            </Button>
        </div>
        <div>
            <Button className='button2' onClick={() => { setSelectedButton('Search'); navigate('search') }}>
            {selectedButton === 'Search' ? <BiSearchAlt /> : <BiSearch />} Search
            </Button>
        </div>
    </div>
    )
}

export default Navbar;