import React,{useState,useEffect,useCallback, useRef} from 'react';
import useWindowDimensions from '../MyHooks/useWindowDimensions';
import './credentials.css';
import credInfo from './credInfo.js';
import { MDBBtn, MDBCardText, MDBIcon, MDBContainer } from 'mdbreact';

 
console.log(credInfo)
const Credentials = ()=>{
    const {width} = useWindowDimensions();
    const credRef = useRef()
    const rightOffset = useCallback(()=>{
            let offset;
                console.log(width)
                if(width <= 768){
                    offset = (-96 +'%')
                }else if(width <= 1024){
                    console.log('I am IPAD')
                }else{
                    console.log('I am Desktop')
                    offset = (-47 + '%')
                }
                return offset;
            }
    ,[width])
        const [right,setRight] = useState(rightOffset);

    
    
    const detailsStyle = {
        position: 'absolute',
        top: 50 +'%',
        right: right,
        width: 20 + 'rem',
        display: 'none',
        transition: 'all 2s ease',
    }
    const showCred = ()=>{
        console.log(credRef.current.style)
        setTimeout(setRight(0),25000)
        credRef.current.style.display = 'block'
        
    }
    const hideCred = ()=>{
        credRef.current.style.display = 'none'
        setRight(rightOffset)
    }
useEffect(()=>{
    rightOffset();
},[rightOffset])
// ()=>setRight(-8.5 + 'em')
    return( <React.Fragment>
        <div className='test-2'>
       <MDBBtn className='credentials-btn' 
        onClick={showCred} 
        href="#">Login Credentials</MDBBtn>
        <div className="credentials-container" 
        ref={credRef} 
        style={detailsStyle} >
        <MDBContainer size = 'sm'className = 'users'style={{ background:"yellow",textAlign:"center"}}>
        <MDBBtn 
        className='position-absolute top-0 left-0 reset-btn' 
        outline 
        onClick={hideCred}
        color="danger"
        size='sm'>
            <MDBIcon icon="times" />
        </MDBBtn>
        <div className='credentials pt-5'>
                <h5 className='fw-bolder'>Login Credentials</h5>
                <p>Please use credentials below to access restricted area</p>
           {
               credInfo.map((user,i)=>{
                   const {name,username,pass} = user;
                   return(
                    <MDBCardText className='text-left user-info py-3 mb-3'>
                    <p>user {i + 1}:</p>
                    <p> name: &emsp;&emsp;&emsp;{name} </p>
                    <p>username: &emsp; {username}</p>
                    <p>password: &emsp;&nbsp;{pass}</p>
                    </MDBCardText>
                   )
               })
           }     
        
        </div>
        
        </MDBContainer>
      </div>
      </div>
      </React.Fragment>
    )
}
export default Credentials;

