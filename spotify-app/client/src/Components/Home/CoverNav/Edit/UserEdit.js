import React,{useState} from 'react';
import './edit.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setUser } from '../../../../slices/UserSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UserEdit() {
    const dispatch= useDispatch();
    const navigate=useNavigate();
    const user=useSelector((state)=>state.auth.user);
    // const userId = JSON.parse(sessionStorage.getItem('userId'))
    // console.log(userId);
    // const user = users.find((user) => user.id === userId);
    const initialFormData = {
        nanoId:user.nanoId,
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        phoneNumber: '',
        email: '',
    };
    const [formData,setFormData]=useState(user || initialFormData)
    const [editData,setEditData]=useState({
        nanoId:user.nanoId,
        username:"",
        password:"",
        firstName:"",
        lastName:"",
        phoneNumber:"",
        email:"",
    })
    const sendDataToBackend = async () => {
        const formConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
        };
        try {
            console.log("before form data");
            console.log("edit data",editData);
            const response = await axios.post('http://192.168.1.122:8081/user/edit', editData, formConfig);
            if (response.status === 200) {
                console.log("formData sent");
                if(response===null){
                    alert("userName already exists")
                    navigate("edit")
                }
                else{
                    dispatch(setUser(formData));
                }
            }else {
                console.log("data not sent");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleEdit = (e)=>{
        e.preventDefault();
        console.log(formData);
        sendDataToBackend();
        
        // navigate('edit')
        }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log("name",name,value);
        setEditData({...editData,[name]:value});
        setFormData((prevFormData) => ({...prevFormData,[name]: value,}));
    }
    return (
        <div className='EditInfo'>
            <div className='edit-container'>
                <div className='edit-personal'>
                EDIT
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