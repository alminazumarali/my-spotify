import React,{useState,useEffect} from 'react';
import {IoIosArrowBack} from 'react-icons/io';
import {IoIosArrowForward} from 'react-icons/io';
import {Button} from '@mui/base/Button';
import './coverNav.scss'
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
function CoverNav({ isCoverScrolled }){
    // console.log({userId})
    const navigate=useNavigate();
    const user = useSelector((state) => state.auth.user);
    console.log(user)
    const navClassName = isCoverScrolled ? 'header-bg' : 'default';
    // const userId = JSON.parse(sessionStorage.getItem('userId'));
    // const user = users.find((user) => user.id === userId);
    // const [formData,setFormData]=useState(users);
    // const [color,setColor]=useState(false);
    // useEffect(()=>{
    //     const changeColor=()=>{
    //         let element = document.getElementById("navName");
    //         if(window.scrollY>=90){
    //             element.removeAttribute("hidden");
    //             setColor(true);
    //         }
    //         else{
    //             element.setAttribute("hidden", "hidden");
    //             setColor(false);
    //         }}
    //         window.addEventListener('scroll',changeColor);
    //         return()=>{
    //             window.removeEventListener('scroll',changeColor);
    //         };
    //     },[]);
        const goBack=()=>{
            navigate(-1);
        }
        const goFront=()=>{
            navigate(1)
        }

    return(
        <div className={`header ${navClassName}`}>
            <div className='nav-Name'>
                <div className='buttonClass'>
                    <Button className='button1' onClick={goBack}><IoIosArrowBack/></Button>
                    <Button className='button1' onClick={goFront}><IoIosArrowForward/></Button>
                </div>
                {isCoverScrolled&&<span id='navName'>{user.dName}</span>}
            </div>
            <div className='edit-btn'>
                <Button onClick={()=>{navigate('edit')}} className='edit'>Edit</Button>
            </div>
        </div>
    )
}
export default CoverNav