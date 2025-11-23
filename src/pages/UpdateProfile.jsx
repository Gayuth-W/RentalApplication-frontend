import react from 'react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateProfile(){
  const [fname, setFname]=useState("");
  const [lname, setLname]=useState("");
  const [phone, setPhone]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [authorized, setAuthorized] = useState(null);  

  const navigate=useNavigate();

  useEffect(()=>{
  if (!localStorage.getItem('userId') || !localStorage.getItem('token')){
    navigate("/login-signup");
  } else {
    setAuthorized(true);
  }
  const loadUserDetails=async()=>{
    try{
      const response =await axios.get(`http://localhost:8080/api/get-seller/${localStorage.getItem('userId')}`,
      {
        headers:{
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setFname(response.data.fname);
      setLname(response.data.lname);
      setPhone(response.data.phone);
      setEmail(response.data.email); 
    }catch(err){
      console.log(err)
    }  
  }
  loadUserDetails();
  }, [])  

  if (authorized === null)
    return null;

  const handleUpdateUser=async ()=>{

    if (!fname || !lname || !phone || !email || !password) {
      alert("All fields are required!");
      return;
    }

    try{
      await axios.put(`http://localhost:8080/api/update-seller/${localStorage.getItem('userId')}`, {
        password,
        fname,
        lname,
        phone,
        email,
      },
      { headers: 
        { Authorization: `Bearer ${localStorage.getItem('token')}` } 
      });
      navigate(`/seller/${localStorage.getItem('userId')}`)
    }catch(err){
      console.log(err)
      alert("error!")
    }
  }
  return(
    <>
    <div className='container'>
      <div className='header'>
        <p>
          Update Profile
        </p>
      </div>
      <div className='inputs'>
        <div className='input'>
          <input type="text" placeholder='First Name' value={fname} onChange={(e)=>{setFname(e.target.value)}}></input>
        </div>
        <div className='input'>
          <input type="text" placeholder='Last Name' value={lname} onChange={(e)=>{setLname(e.target.value)}}></input>
        </div>
        <div className='input'>
          <input type="text" placeholder='Phone Number' value={phone} onChange={(e)=>{setPhone(e.target.value)}}></input>
        </div>
        <div className='input'>
          <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value.email)}}></input>
        </div>
        <div className='input'>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{if(e.target.value!=null) setPassword(e.target.value)}}></input>
        </div>
      </div>

      <div className="submit-container">
          <div className="submit" onClick={handleUpdateUser}>submit</div>
      </div>      
    </div>
    </>
  );
}
export default UpdateProfile;