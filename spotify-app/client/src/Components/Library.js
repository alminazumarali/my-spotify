import React from 'react';
import {BiLibrary} from 'react-icons/bi';
import {IoAddOutline} from 'react-icons/io5';
import '../styles/library.scss';
import {Button} from '@mui/base/Button';
import {useNavigate} from 'react-router-dom';
function Library({userId}){
    const navigate=useNavigate();
    return(
        <div className='container'>
            <div className='library'>
                <BiLibrary/> Your Library
            </div>
            <div className='add'>
                <Button onClick={()=>{navigate('playlist')}} className='addButton'>
                    <IoAddOutline/>
                </Button>
            </div>
        </div>
    )
}
export default Library;