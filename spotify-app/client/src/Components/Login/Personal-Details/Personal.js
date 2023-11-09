// import axios from 'axios';
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './personal.scss';

// function Personal() {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const dispatch = useDispatch();
//     const userData = location.state;
//     const [formData,setFormData]=useState({
//                 ...userData,
//                 displayName:"",
//                 bio:"",
//             })
// const [imageData,setImageData]=useState({
//                 image:[],
//                 image1:[]
//             })
//     const sendDataToBackend=async()=>{
//         const formConfig = {
//             headers: {
//                 'Content-Type':'application/json',
//             },
//         };
//         const imageConfig={
//             headers:{
//                 'Content-Type':'multipart/form-data',
//             },
//         };
//         try {
//             console.log("before form data")
//             const response = await axios.post('http://192.168.1.122:8081/user/register', formData,formConfig);
//             if (response.status === 200) {
//                 console.log("formData sent")
//                 }
//             else {
//                 console.log("data not sent")
//                 }
//                 console.log("before image")
//             if (imageData.image !== null || imageData.image1 !== null) {
//                 const imageConfig = {
//                     headers: {
//                         'Content-Type': 'multipart/form-data',
//                     },
//                 };
//                 const response1 = await axios.post(`http://192.168.1.122:8081/user/images/${formData.nanoId}`, imageData, imageConfig);
//                 if (response1.status === 200) {
//                     console.log("image data sent");
//                 } else {
//                     console.log("image data not sent");
//                 }
//             }
//             navigate("/signIn")
//             } catch (error) {
//                 console.log(error)
//             }
//     }
//     const handleInfo = (e) => {
//         e.preventDefault();
//         console.log(formData);
//         console.log(imageData)
//         sendDataToBackend();
//         // sendImageDataToBackend(imageData);
//     };
    
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//         console.log("handle change in form",formData)
//     };

//     const handleFileChange = (event) => {
//         const { name } = event.target;
//         const file = event.target.files[0];
//         console.log(file)
//         console.log(formData.nanoId)
//         setFormData({...imageData,[name]:file})
//         console.log("handle change in image",imageData)
//     };

//     return (
//         <div className='personal'>
//             <div className='forms-personal'>
//                 <div className='personal-txt'>
//                     Personal Info
//                 </div>
//                 <form className='forms1-personal' onSubmit={handleInfo}>
//                     <div className='content-personal'>
//                         <label className='label-personal'>Display Name:</label>
//                         <input type="text" className='input-personal' value={formData.displayName} onChange={handleChange} name='displayName' />
//                     </div>
//                     <div className='content-personal'>
//                         <label className='label-personal'>Bio:</label>
//                         <input type="text" className='input-personal' value={formData.bio} onChange={handleChange} name='bio' />
//                     </div>
//                     <div className='content-personal'>
//                         <label className='label-personal'>Profile Pic:</label>
//                         <input type="file" className='input-personal' onChange={handleFileChange} name='image'/>
//                     </div>
//                     <div className='content-personal'>
//                         <label className='label-personal'>Cover Pic:</label>
//                         <input type="file" className='input-personal' onChange={handleFileChange} name='image1' />
//                     </div>
//                     <button type='submit' className='submit-btn'>Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Personal;



import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import './personal.scss';

function Personal() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const userData = location.state;
    const [formData, setFormData] = useState({
        ...userData,
        displayName: "",
        bio: "",
    });

    const [imageData, setImageData] = useState({
        image: null,
        image1: null,
    });

    const sendDataToBackend = async () => {
        const formConfig = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            console.log("before form data");
            const response = await axios.post('http://192.168.1.122:8081/user/register', formData, formConfig);
            if (response.status === 200) {
                console.log("formData sent");
                if(response===null){
                    alert("userName already exists")
                    navigate("/signUp")
                }
            }else {
                console.log("data not sent");
            }

            console.log("before image");
            if (imageData.image !== null || imageData.image1 !== null) {
                const imageConfig = {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                };
                const formDataImage = new FormData();

                if (imageData.image) {
                    formDataImage.append('image', imageData.image, imageData.image.name);
                    console.log("image is added")
                    console.log(formDataImage)
                }

                if (imageData.image1) {
                    formDataImage.append('image1', imageData.image1, imageData.image1.name);
                    console.log("image1 is added")
                    console.log(formDataImage)
                }

                const response1 = await axios.post(`http://192.168.1.122:8081/user/images/${formData.nanoId}`, formDataImage, imageConfig);

                if (response1.status === 200) {
                    console.log("image data sent");
                }else {
                    console.log("image data not sent");
                }
            }

            navigate("/signIn");
        } catch (error) {
            console.log(error);
        }
    }

    const handleInfo = (e) => {
        e.preventDefault();
        console.log(formData);
        console.log(imageData);
        sendDataToBackend();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log("handle change in form", formData);
    };

    const handleFileChange = (event) => {
        const { name } = event.target;
        const file = event.target.files[0];
        console.log(file);
        console.log(formData.nanoId);
        setImageData({ ...imageData, [name]: file });
        console.log("handle change in image", imageData);
    };

    return (
        <div className='personal'>
            <div className='forms-personal'>
                <div className='personal-txt'>
                    Personal Info
                </div>
                <form className='forms1-personal' onSubmit={handleInfo}>
                    <div className='content-personal'>
                        <label className='label-personal'>Display Name:</label>
                        <input type="text" className='input-personal' value={formData.displayName} onChange={handleChange} name='displayName' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Bio:</label>
                        <input type="text" className='input-personal' value={formData.bio} onChange={handleChange} name='bio' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Profile Pic:</label>
                        <input type="file" className='input-personal' onChange={handleFileChange} name='image' />
                    </div>
                    <div className='content-personal'>
                        <label className='label-personal'>Cover Pic:</label>
                        <input type="file" className='input-personal' onChange={handleFileChange} name='image1' />
                    </div>
                    <button type='submit' className='submit-btn'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Personal;
