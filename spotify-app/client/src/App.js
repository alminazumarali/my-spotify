import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Cover from './Components/Home/Cover/Cover';
import Home from './Components/Home/Home/Home';
import Add from './Components/Home/Library/Add/Add';
import Playlist from './Components/Home/Library/playlist/Playlist';
import Search from './Components/Home/Navbar/Search/Search';
import Personal from './Components/Login/Personal-Details/Personal.js';
import SignIn from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';
import Start from './Components/Login/Start/Start.js';
import Edit from './Components/Home/CoverNav/Edit/UserEdit.js';
import UserSong from './Components/Home/Library/UserSongs/UserSong.js'

function App() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route index element={<Start/>}/>
                <Route path='/signIn' element={<SignIn/>}/>
                <Route path='/signUp' element={<SignUp/>}/>
                <Route path='/personalInfo' element={<Personal/>}/>
            </Route>
            <Route path="/home" element={<Home/>}>
                <Route index element={<Cover/>}/>
                <Route path="search" element={<Search/>}/>
                <Route path="userSong" element={<UserSong/>}/>
                <Route path="edit" element={<Edit/>}/>
                <Route path="playlist" element={<Playlist/>}/>
                <Route path="add" element={<Add/>}/>
            </Route>
        </Routes>
    )
}

export default App