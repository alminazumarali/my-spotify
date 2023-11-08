import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AddSongs } from '../../../../slices/SongSlice';
import './add.scss';

function Add() {
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const [formSong,setFormSong]=useState({
    name:'',
    song:'',
    songProfile:'',
  })
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormSong({...formSong,[name]:value})
  }
  const handleFileChange=(event)=>{
    const {name}=event.target;
    const file=event.target.files[0];
    setFormSong({...formSong,[name]:file})
  }
  const handleSubmit=()=>{
    dispatch(AddSongs(formSong));
    navigate("/home");
  }
  return (
    <div className='add-container'>
      <div className='song-container'>
        <div className='addSong'>ADD SONGS</div>
        <div>
            <form className='song-form' onSubmit={handleSubmit}>
              <div className='label-input'>
                <label className='label'>Song Name :</label>
                <input type='text' className='song-input' value={formSong.name} name='name' onChange={handleChange} label='name'/>
              </div>
              <div className='label-input'>
                <label className='label'>Song :</label>
                <input type='file' className='song-input' name='song' onChange={handleFileChange} label='song'/>
              </div>
              <div className='label-input'>
                <label className='label'>Profile :</label>
                <input type='file' className='song-input' name='songProfile' onChange={handleFileChange} label='songProfile'/>
              </div>
              <div className='btn-container'>
                <button className='song-btn'>Add Song</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Add