import React,{useEffect,useState} from 'react';
import './cover.scss';
import { useSelector } from 'react-redux';
import {VscVerified} from 'react-icons/vsc';
import Song from '../Songs/Song'
import Image from '../../../Images/default_profile.png'
import axios from 'axios'

function Cover() {
  const user = useSelector((state) => state.auth.user);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [imageSrc, setImageSrc] = useState(null);
  const [coverImage,setCoverImage]=useState(null);
    useEffect(() => {
        const imageUrl = `http://192.168.1.122:8081/image/${user.name}`;
        fetch(imageUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
            },
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then((blob) => {
                const imageUrl = URL.createObjectURL(blob);
                setImageSrc(imageUrl);
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
        }, []);

  useEffect(() => {
    const imageUrlCover = `http://192.168.1.122:8081/image/${user.coverName}`;
        fetch(imageUrlCover, {
            method: 'GET',
            headers: {
                'Content-Type': 'image/jpeg',
            },
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.blob();
            })
            .then((blob) => {
                const imageUrlCover = URL.createObjectURL(blob);
                setCoverImage(imageUrlCover);
            })
            .catch((error) => {
                console.error('Error fetching image:', error);
            });
    const divStyle = {
      backgroundImage: `url(${imageUrlCover})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    };
    setBackgroundStyle(divStyle);
  }, [user]);

  return (
    <div className='cover-container'>
      <div className='cover' style={backgroundStyle}>
        <div className='profile-div'>
        {imageSrc ? (
            <img className='profile' src={imageSrc} alt="Profile" />
          ) : (
            <img className='profile' src={Image} alt="Default Profile" />
          )}
        </div>
        <div className='details'>
          <span className='verify'><VscVerified /> Verified</span>
          <span className='name'>{user.displayName}</span>
          <span className='bio'>{user.bio}</span>
        </div>
      </div>
      {/* <div className='songs-container'>
        <Song />
      </div> */}
    </div>
  );
}

export default Cover;
