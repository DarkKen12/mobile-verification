import React, { useEffect } from 'react'
import {  useNavigate} from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { useState } from "react";

const Success = () => {
    const navigate = useNavigate();
    const [successOpen, setsuccessOpen] = useState();
    useEffect(()=>{
        function LoggedIn(){
            setsuccessOpen(true);
        }
        LoggedIn();
    })
  return (
    <>
        <div className="container11">
            <img src={require('../images/Artboard 1.jpg')} alt='person'/>
            <div className="container12">
                <h4 id='text13'>Welcome to AdmitKard</h4>

            </div>
            <div className="container13">
                <h4 id='text14'>In order to provide you with a custom experience</h4>
                <h4 id='text15'>we need to ask you a few questions.</h4>
            </div>
            <button type='button' className='btn btn-primary' id='btn2' onClick={()=>navigate('/')} >
            Get Started</button>
            <h4 id='text16'>*This will only take 5 min.</h4>

        </div>
        <Snackbar open={successOpen} autoHideDuration={3000}  onClose={()=> setsuccessOpen(false)} anchorOrigin={{horizontal:'center', vertical:'top'}} >
        <Alert severity='success' id='otp-text'>Welcome User</Alert>
      </Snackbar>
    
    </>
  )
}

export default Success