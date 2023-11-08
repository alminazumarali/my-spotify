import React,{useState,useEffect} from 'react'
import {GrAdd} from 'react-icons/gr'
import {Button} from '@mui/base/Button'
import './Songs.scss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Music from '../../../Images/music_profile.jpg'
import Stream from "../Stream/Stream";
import {MdOutlineDeleteOutline} from 'react-icons/md'

function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remSeconds = Math.round(seconds % 60);
    return `${minutes}:${remSeconds < 10 ? '0' : ''}${remSeconds}`;
    }
async function getAudioDuration(audioUrl) {
    const audio = new Audio(audioUrl);
    await audio.load();
    return audio.duration;
    }
function Song() {
    const navigate=useNavigate();
    const songs=useSelector((state)=>state.song.songs);
    console.log(songs);

    const [songDurations, setSongDurations] = useState({});

    useEffect(() => {
        const fetchDurations = async () => {
        const durations = {};
        for (let i = 0; i < songs.length; i++) {
            const audioUrl = songs[i].song;
            const duration = await getAudioDuration(audioUrl);
            durations[i] = formatDuration(duration);
        }
        setSongDurations(durations);
        };

        if (songs.length > 0) {
        fetchDurations();
        }
    }, [songs]);
    
    return (
        <div className='Song-container'>
            {/* <div className='add-songs'>
                    <div className='add'>
                        <Button className='add-button' onClick={()=>navigate("add")}><GrAdd/></Button>
                    </div>
                    <div className='add-text'>Add Songs</div>
            </div> */}
            <div className='song-buttons'>
                {
                    songs.map((song,index)=>{
                        const handleClick=()=>{
                            
                        }
                        return(
                            <Button key={index} className='song-button' onClick={handleClick}>
                                <div className='song-details'>
                                    <div className='detail1'>
                                        <img src={URL.createObjectURL(songs[index].songProfile) || Music} alt='song-profile' className='song-profile'/>
                                    </div>
                                    <div className='detail2'>
                                        {songs[index].name}
                                    </div>
                                    <div className='detail3'>
                                        {songDurations[index]}
                                    </div>
                                    <div className='delete-song'>
                                        <Button className='del-btn'>
                                            <MdOutlineDeleteOutline/>
                                        </Button>
                                    </div>
                                </div>
                            </Button>
                        )
                    })
                }
            </div>
            <div className='Stream'>
                <Stream/>
            </div>
        </div>
    )
}

export default Song
