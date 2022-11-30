import React from 'react'
import Navbar from '../components/Navbar'
import { TextField,Button} from '@mui/material';



const ForgotPassword = () => {
  function Alert(){
    if(document.getElementById("textfield").value == ""){
      alert("Please Input a Valid Email")
    }else{
      alert("An Email has been sent with further instructions")
    }
  }
  return (
    <>
    <div>
        <Navbar />
    </div>
    <div style={{
          position: 'absolute',
          height: '500px',
          width: '500px',
          left: '40%',
          bottom:'20%',
          border: '2px solid black',
      }}>
    <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '45px',
          fontSize: '30pt'
      }}>
        Forgot Your Password?
    </div>
    <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '25px',
          
      }}>
        <TextField id="textfield" label="Enter Email" variant="outlined"/>
    </div>
  
    <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '25px',
      }}>
        <Button variant="contained" onClick={(Alert)} >Request Reset Link</Button>
    </div>
    <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '180px',
      }}>
        <a href="/localhost:3000/pages/signin">Return To Sign In</a>
    </div>

    <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
      }}>
        <a href="https://www.riotgames.com/en/privacy-notice">Privacy Policy</a>
    </div>
    </div>      
          
      </>
  )
}

export default ForgotPassword