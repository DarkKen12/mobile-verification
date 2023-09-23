import {React,useState,useEffect}from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';

import { Alert } from '@mui/material';

const Verification = (props) => {
  const navigate = useNavigate();
  const {state}= useLocation();
  const {newId}=state;
  const [reload, setreload] = useState(true);
  const [Open, setOpen] = useState(true)
  const [invalidOpen, setinvalidOpen] = useState();
  const [otp, setotp] = useState();
  const [first, setfirst] = useState('');
  const [second, setsecond] = useState('');
  const [third, setthird] = useState('');
  const [fourth, setfourth] = useState('');
  
  useEffect(()=>{
    generateOTP();
  },[reload]);
  
    const generateOTP= async()=>{
      try{
        const response= await fetch('http://localhost:8080/Verification');
        if(response.status===200)
          {
            const data=await (response.json());
            setotp(data.otp);
          
          }
        else
        {
          setinvalidOpen(true);
        }
      }
      catch(error)
      {
        console.log(error);
      }
    }

    const handleResendClick=(event)=>{
      window.location.reload();
      setreload(true);
    }


  const handleFirstDigit=(e)=>{
    let s=(e.target.value);
    setfirst(s);

  }
  const handleSecondDigit=(e)=>{
    let s=(e.target.value);
    setsecond(s);
  }
  const handleThirdDigit=(e)=>{
    let s=(e.target.value);
    setthird(s);
  }
  const handleFourthDigit=(e)=>{
    let s=(e.target.value);
    setfourth(s);
  }
  
  const handleClose=()=>{
    setOpen(false);
  }

  const handleVerification=()=>{
    let value="";
    
    value=first+second+third+fourth;
    const v=Number(value);
    if(v===otp)
    {
      
      navigate('/Success');
    }
    else
    {
      setinvalidOpen(true);
    }
  }
  return (
    <>
        <div className="container1">
            <img src={require('../images/undraw_confirmed_81ex.jpg')} alt='handimage'/>
            <div className="container7">
              <h4 id='text7'>Please verify your mobile number</h4>
            </div>
            <div className="container8">
              <h4 id='text8'>An OTP is sent to <span id='text9'>{newId} </span></h4>
              <h5 onClick={()=>navigate('/')} id='text10'>Change Phone Number</h5>
            </div>
            <div className="container9">
            <input type="text" pattern="\d*" maxlength="1" value={first} onChange={handleFirstDigit}  />
        <input type="text" pattern="\d*" maxlength="1" value={second} onChange={handleSecondDigit}   />
        <input type="text" pattern="\d*" maxlength="1" value={third} onChange={handleThirdDigit}   />
        <input type="text" pattern="\d*" maxlength="1" value={fourth} onChange={handleFourthDigit}    />
            </div>

            <div className="container10">
              <h4 id='text11' >Didn’t receive the code? <span id='text12'  onClick={handleResendClick}  >Resend</span></h4>
            </div>

            <button type='button' className='btn btn-primary' id='btn1'  onClick={handleVerification}>
            Verify</button>
        </div>
        
      <br/>
      <Snackbar open={Open} autoHideDuration={5000}  message="OTP is" onClose={handleClose} anchorOrigin={{horizontal:'center', vertical:'top'}} >
        <Alert severity='success' id='otp-text'>OTP :  {otp}</Alert>
      </Snackbar>

   

 <Snackbar open={invalidOpen} autoHideDuration={3000}  onClose={()=> setinvalidOpen(false)} anchorOrigin={{horizontal:'center', vertical:'top'}} >
        <Alert severity='error' id='otp-text'>Otp not matched</Alert>
      </Snackbar>


    </>
  )
}

export default Verification;
