import React, { useState, useEffect } from 'react';
import { VscVerified } from 'react-icons/vsc';
import '../styles/cover.scss';
import { useSelector } from 'react-redux';
import Image from '../styles/Spotify_default1.jpg';
import Song from './Song';

function Cover() {
  const users = useSelector((state) => state.auth.users);
  const userId = JSON.parse(sessionStorage.getItem('userId'));
  const user = users.find((user) => user.id === userId);
  const [backgroundStyle, setBackgroundStyle] = useState({});

  useEffect(() => {
    const imageUrl = URL.createObjectURL(user.cover);
    const divStyle = {
      backgroundImage: `url(${imageUrl})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    setBackgroundStyle(divStyle);
  }, [user]);

  return (
    <div className='cover-container'>
      <div className='cover' style={backgroundStyle}>
        <div className='profile-div'>
          <img className='profile' src={URL.createObjectURL(user.profile) || Image} alt="fbc" />
        </div>
        <div className='details'>
          <span className='verify'><VscVerified /> Verified</span>
          <span className='name'>{user.dName}</span>
          <span className='bio'>{user.bio}</span>
        </div>
      </div>
      <div className='songs-container'>
        <Song />
      </div>
    </div>
  );
}

export default Cover;
