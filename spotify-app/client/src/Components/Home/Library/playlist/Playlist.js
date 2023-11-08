import React, { useState, useEffect } from "react";
import {Button} from '@mui/base/Button';
import { useNavigate } from "react-router-dom";
import './playlist.scss'
const Playlist=()=>{
  const navigate=useNavigate()
  const handleChange=()=>{

  }
  const handleSubmit=()=>{

  }
  return(
    <div className="playlist-main-container">
      <div className="playlist-container">
      <div className="playlist-heading">
          CREATE NEW PLAYLIST
      </div>
      <form className="playlist-form" onSubmit={handleSubmit}>
        <div>
          <input className="input-playlist" placeholder="Give your playlist name" onChange={handleChange}/>
        </div>
        <div className="playlist-btn">
          <button className="Button" name="cancel" onClick={()=>{navigate("/Home")}}>Cancel</button>
          <button className="Button" name="submit">Create</button>
        </div>
      </form>
    </div>
    </div>
  )
}
export default Playlist;













// var a;
// const AudioPlay = () => {
//   const [buttonName, setButtonName] = useState("Play");

//   const [audio, setAudio] = useState();

//   useEffect(() => {
//     if (a) {
//       a.pause();
//       a = null;
//       setButtonName("Play");
//     }
//     if (audio) {
//       a = new Audio(audio);
//       a.onended = () => {
//         setButtonName("Play");
//       };
//     }
//   }, [audio]);

//   const handleClick = () => {
//     if (buttonName === "Play") {
//       a.play();
//       setButtonName("Pause");
//     } else {
//       a.pause();
//       setButtonName("Play");
//     }
//   };

//   const addFile = (e) => {
//     if (e.target.files[0]) {
//       setAudio(URL.createObjectURL(e.target.files[0]));
//     }
//   };

//   return (
//     <div>
//       <Button onClick={handleClick}>{buttonName}</Button>
//       <input type="file" onChange={addFile} />
//     </div>
//   );
// };

// export default AudioPlay;