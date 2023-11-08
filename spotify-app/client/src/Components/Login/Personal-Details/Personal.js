import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './personal.scss';

function Personal() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const userData = location.state;
    const [formData,setFormData]=useState({
                ...userData,
                displayName:"",
                bio:"",
                image:null,
                coverImage:null
            })
    const sendDataToBackend=async(data)=>{
        console.log(data);
        const config = {
            headers: {
                'Content-Type':'multipart/form-data',
            },
        };
        try {
            console.log(data);
            const response = await axios.post('http://192.168.1.122:8081/user/register', data,config);
            if (response.status === 200) {
                navigate("/signIn")
                }
            else {
                console.log("data not sent")
                }
            } catch (error) {
                console.log(error)
            }
    }
    const handleInfo = (e) => {
        e.preventDefault();
        console.log(formData);
        sendDataToBackend(formData);
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        console.log(file)
        setFormData({...formData,[name]:file})
        console.log(formData)
    };

    return (
        <div className='personal'>
            <div className='forms-personal'>
                <div className='personal-txt'>
                    Personal Info
                </div>
                <form className='forms1-personal' onSubmit={handleInfo}>
                    <div className='content-personal'>
                        <label className='label-personal'>Display Name:</label>
                        <input type="text" className='input-personal' value={formData.displayName} onChange={handleChange} name='displayName' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Bio:</label>
                        <input type="text" className='input-personal' value={formData.bio} onChange={handleChange} name='bio' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Profile Pic:</label>
                        <input type="file" className='input-personal' onChange={handleFileChange} name='image'/>
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Cover Pic:</label>
                        <input type="file" className='input-personal' onChange={handleFileChange} name='coverImage' />
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Personal;
