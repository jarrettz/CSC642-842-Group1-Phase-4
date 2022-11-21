import React from 'react'
import Navbar from '../components/Navbar'
import { TextField,Button} from '@mui/material';



const ForgotPassword = () => {
  return (
    <>

    <div>
        <Navbar />
    </div>
    <div style={{
          height: '500px',
          width: '500px',
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
        <TextField id="outlined-basic" label="Enter Email" variant="outlined"/>
    </div>

    <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '25px',
      }}>
        <Button variant="contained">Request Reset Link</Button>
    </div>

    <div  style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '180px',
      }}>
        Return to Sign in
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