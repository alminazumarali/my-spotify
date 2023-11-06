import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './Components/Add';
import Dashboard from './Components/Dashboard/Dashboard.js';
import Home from './Components/Home/Home';
import Personal from './Components/Login/Personal-Details/Personal.js';
import SignIn from './Components/Login/SignIn/SignIn';
import SignUp from './Components/Login/SignUp/SignUp';
import Start from './Components/Login/Start/Start.js';
import Cover from './Components/Cover';
import Playlist from './Components/Playlist';
import Search from './Components/Search';
import Edit from './Components/UserEdit';

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
                <Route path="edit" element={<Edit/>}/>
                <Route path="playlist" element={<Playlist/>}/>
                <Route path="add" element={<Add/>}/>
            </Route>
        </Routes>
    )
}

export default App