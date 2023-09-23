import {React , useState} from 'react'
import {  useNavigate} from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import '/node_modules/flag-icons/css/flag-icons.min.css';

const FrontPage = () => {
  const navigate = useNavigate();
  const [number, setnumber] = useState("");
  const [open, setopen] = useState();
  const handleOnChange=(event)=>{
    let s=(event.target.value);
    if(s.length <10  || s.length>10)
    {
      
      const newCon=document.querySelector('.container5');
      newCon.style.border ='2px solid red';

    }
    else if(s.length===10)
      {
        
      const newCon=document.querySelector('.container5');
      newCon.style.border ='2px solid green';

      }
    setnumber(s);
  }
  const checkNumber=()=>{  
    if(number.length<10 || number.length>10  )
        {
         
          setopen(true)
        }
          else 
    {
      var flag=true;
      for(let i=0;i<number.length;i++)
      {
        if((number.charAt(i)).toUpperCase() !== ((number.charAt(i)).toLowerCase()))
          {
            flag=false;
            break;
          }

      }
      if(flag===false)
      {

        setopen(true);
      }
      else
      {
        navigate('/Verification',{replace:true,state:{newId:number}});
      }
    }
  }
  return (
    <>
      <div className=".col col-sm col-md-12 col-lg-12 col-xl-12 container1">
        <div className=".col col-sm col-md-12 col-lg-12 col-xl-12 container2">
          <img src={require('../images/logo.png')} alt='logo'/>
        </div>
        <div className=" .col col-sm col-md-12 col-lg-12 col-xl-12 container3">
        <h4 id='text1'>Welcome Back</h4>
        <h5 id='text2'>Please sign in to your account</h5>
        <div className=" container4">
            <span id='text-1'>Enter your phone number</span>
            <div className=" container5" id='text0'> <span class="fi fi-in fis" ></span> +91 
            <img src={require('../images/Polygon 1.jpg')} alt='dropdown' ></img>
              <input type='tel'id='text' onChange={handleOnChange} maxLength={10} value={number}></input>
            </div>
            <div className="container6">
            <h6 id='text3'>
              We will send you a one time SMS message. <br/>Charges may apply.
            </h6>
            </div>
            <button type='button' className='btn btn-primary' id='btn' onClick={checkNumber}>
            Sign in with OTP</button>
           
          </div>
        </div>      
      </div>
      <Snackbar open={open} autoHideDuration={3000}  onClose={()=> setopen(false)} anchorOrigin={{horizontal:'center', vertical:'top'}} >
        <Alert severity='error' id='otp-text'>Number is not Valid</Alert>
      </Snackbar>
    </>
   
  )
}

export default FrontPage;