// import React,{useState} from 'react';
// import '../styles/edit.scss';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { updateInfo } from '../slices/UserSlice';
// import { useNavigate } from 'react-router-dom';

// function UserEdit() {
//   const dispatch= useDispatch();
//   const navigate=useNavigate();
//   const users=useSelector((state)=>state.auth.users);
//   const userId = JSON.parse(sessionStorage.getItem('userId'))
//   console.log(userId);
//   const user = users.find((user) => user.id === userId);
//   const initialFormData = {
//     username: '',
//     firstName: '',
//     lastName: '',
//     password: '',
//     phoneNumber: '',
//     email: '',
//   };
//   const [formData,setFormData]=useState(user || initialFormData)
//   const handleEdit = (e)=>{
//       e.preventDefault();
//       console.log(formData);
//       dispatch(updateInfo(formData));
//       // navigate('edit')
//   }
//   const handleChange=(e)=>{
//     const {name,value}=e.target;
//     console.log("name",name,value);
//     setFormData((prevFormData) => ({...prevFormData,[name]: value,}));
// }
//   return (
//     <div className='EditInfo'>
//     <div className='form'>
//       <div className='edit'>
//       Edit
//       </div>
//       <form className='forms' onSubmit={handleEdit}>
//       <div className='contents'>
//           <label className='label'>UserName:</label>
//           <input type="text" className='input' name='username' value={formData.username} onChange={handleChange} label='username'/>
//         </div>
//         <div className='contents'>
//           <label className='label'>First Name:</label>
//           <input type="text" className='input' name='firstName' value={formData.firstName} onChange={handleChange} label='fName'/>
//         </div>
//         <div className='contents'>
//           <label className='label'>Last Name:</label>
//           <input type="text" className='input' name='lastName' value={formData.lastName} onChange={handleChange} label='lName'/>
//         </div>
//         <div className='contents'>
//           <label className='label'>Password:</label>
//           <input type="text" className='input' name='password' value={formData.password} onChange={handleChange} label='password'/>
//         </div>
//         <div className='contents'>
//           <label className='label'>Phone Number:</label>
//           <input type="text" className='input' name='phoneNumber' value={formData.phoneNumber} onChange={handleChange} label='num'/>
//         </div>
//         <div className='contents'>
//           <labelclassName='label'>Email:</label>
//           <input type="text" className='input' name='email' value={formData.email} onChange={handleChange} label='email'/>
//         </div>
//         <button type='submit' className='submit-btn'>Submit</button>
//       </form>
//     </div>
//   </div>
//   )
// }


// export default UserEdit