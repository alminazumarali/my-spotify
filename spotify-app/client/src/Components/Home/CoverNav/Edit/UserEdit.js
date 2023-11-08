import React,{useState} from 'react';
import './edit.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../slices/UserSlice';
import { useNavigate } from 'react-router-dom';

function UserEdit() {
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const user=useSelector((state)=>state.auth.user);
    // const userId = JSON.parse(sessionStorage.getItem('userId'))
    // console.log(userId);
    // const user = users.find((user) => user.id === userId);
    const initialFormData = {
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        email: '',
    };
    const [formData,setFormData]=useState(user || initialFormData)
    const handleEdit = (e)=>{
        e.preventDefault();
        console.log(formData);
        dispatch(setUser(formData));
        // navigate('edit')
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log("name",name,value);
        setFormData((prevFormData) => ({...prevFormData,[name]: value,}));
    }
    return (
        <div className='EditInfo'>
            <div className='edit-container'>
                <div className='edit'>
                Edit
                </div>
                <form className='forms' onSubmit={handleEdit}>
                    <div className='contents'>
                        <label className='label-edit'>UserName:</label>
                        <input type="text" className='input-edit' name='username' value={formData.username} onChange={handleChange} label='username'/>
                    </div>
                    <div className='contents'>
                        <label className='label-edit'>First Name:</label>
                        <input type="text" className='input-edit' name='firstName' value={formData.firstName} onChange={handleChange} label='fName'/>
                    </div>
                    <div className='contents'>
                        <label className='label-edit'>Last Name:</label>
                        <input type="text" className='input-edit' name='lastName' value={formData.lastName} onChange={handleChange} label='lName'/>
                    </div>
                    <div className='contents'>
                        <label className='label-edit'>Password:</label>
                        <input type="text" className='input-edit' name='password' value={formData.password} onChange={handleChange} label='password'/>
                    </div>
                    <div className='contents'>
                        <label className='label-edit'>Phone Number:</label>
                        <input type="text" className='input-edit' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} label='num'/>
                    </div>
                    <div className='contents'>
                        <label className='label-edit'>Email:</label>
                        <input type="text" className='input-edit' name='email' value={formData.email} onChange={handleChange} label='email'/>
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    )
}


export default UserEdit