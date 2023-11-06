import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { personalInfo } from '../../../slices/UserSlice';
import './personal.scss'
// import FileBase64 from 'react-file-base64';

function Personal() {
    const navigate=useNavigate();
    const location=useLocation();
    const dispatch=useDispatch();
    const userData=location.state;
    const [formData,setFormData]=useState({
        ...userData,
        dName:"",
        bio:"",
        profile:"",
        cover:""
    })
    const handleInfo=()=>{
        dispatch(personalInfo(formData));
        navigate('/signIn');
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleFileChange=(event)=>{
        const {name}=event.target;
        const Photo = event.target.files[0];
        setFormData({...formData,[name]:Photo});
    }
    return (
        <div className='personal'>
            <div className='forms-personal'>
                <div className='personal-txt'>
                Personal Info
                </div>
                <form className='forms1-personal'>
                <div className='content-personal'>
                    <label className='label-personal'>Display Name :</label>
                    <input type="text" className='input-personal' value={formData.dName} onChange={handleChange} name='dName' label='dName'/>
                </div>
                <div className='content-personal'>
                    <label className='label-personal'>Bio :</label>
                    <input type="text" className='input-personal' value={formData.bio} onChange={handleChange} name='bio' label='bio'/>
                </div>
                <div className='content-personal'>
                    <label className='label-personal'>Profile Pic :</label>
                    <input type="file" className='input-personal' onChange={handleFileChange} name='profile' label='profile'/>
                </div>
                <div className='content-personal'>
                    <label className='label-personal'>Cover Pic :</label>
                    <input type="file" className='input-personal' onChange={handleFileChange} name='cover' label='cover'/>
                </div>
                <button type='submit' onClick={handleInfo} className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Personal