import React,{useState} from 'react';
import {BiLibrary} from 'react-icons/bi';
import {IoAddOutline} from 'react-icons/io5';
import './library.scss';
import {Button} from '@mui/base/Button';
import {useNavigate} from 'react-router-dom';
function Library(){
    const navigate=useNavigate();
    const [isDropDownVisible,setDropDownVisible]=useState(false);
    const DropDown=()=>{
        setDropDownVisible(!isDropDownVisible);
    }
    const handleAddSong=(e)=>{
        setDropDownVisible(false);
        if(e.target.value=='add1')
        {
            navigate("UserSong");
        }
        else{
            navigate("playlist");
        }
    }
    return(
        <div className='container'>
            <div className='library'>
                <BiLibrary/> Your Library
            </div>
            <div className='add'>
                <Button onClick={DropDown} className='addButton'>
                    <IoAddOutline/>
                </Button>
                {isDropDownVisible && (
                    <div className='dropdown1'>
                        <ul className='dropdown'>
                            <Button className='lib-btn' value="add1" onClick={handleAddSong}>Add Song</Button>
                            <Button className='lib-btn' value="create1" onClick={handleAddSong}>Create Playlist</Button>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}
export default Library;