import React,{useState,useEffect,useCallback} from 'react';
import useWindowDimensions from '../MyHooks/useWindowDimensions';
import './credentials.css';
import { 
    MDBBtn, 
    MDBCard, 
    MDBCardBody, 
    MDBCardTitle, 
    MDBCardText, 
    MDBCol, 
    MDBIcon,
    MDBContainer,
    MDBRow,
    } from 'mdbreact';

    // -39.2 +'vw'
 

const Credentials = ()=>{
    const {width} = useWindowDimensions();
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
        width: 40 + 'em',
        transition: 'all 2s ease',
    }
useEffect(()=>{
    rightOffset();
},[rightOffset])
 
    return( 
       
        <MDBCol className="credentials-container"  
        style={detailsStyle} >
        <MDBBtn className='credentials-btn' 
        color="light-green"
        onClick={()=>setRight(-17 + 'em')} 
        href="#">Login Credentials</MDBBtn>
        <MDBCard className = 'users'style={{ width: "40vw" ,background:"yellow",textAlign:"center"}}>
        <MDBBtn 
        className='position-absolute top-0 reset-btn' 
        outline 
        onClick={()=>setRight(rightOffset)}
        color="danger"
        size='sm'>
            <MDBIcon icon="times" />
        </MDBBtn>
          <MDBCardBody>
            <MDBCardTitle >
                <MDBContainer >
                    <MDBRow className="justify-content-center flex-column" style={{width: '14em'}}>
                    <h6 className='text-center mt-4'>LOGIN CREDENTIALS</h6>
                    <MDBCardText className="mb-0">
                    <p>Please use credentials below to access restricted area</p>
                    </MDBCardText>
                    <MDBCol>
                    <MDBCardText className='text-left user-info'>
                        <p>USER ONE:</p>
                        <p> Name: &emsp;&emsp;&emsp;John Doe </p>
                        <p>Username: &emsp; Jdoe</p>
                        <p>password: &emsp;&nbsp;1111</p>
                        </MDBCardText>
                    </MDBCol>
                    <MDBCol className='mt-3'>
                    <MDBCardText className='text-left user-info'>
                        <p>USER TWO:</p>
                        <p> Name: &emsp;&emsp;&emsp;John Doe </p>
                        <p>Username: &emsp; Jdoe</p>
                        <p>password: &emsp;&nbsp;1111</p>
                        </MDBCardText>
                    </MDBCol>
                    <MDBCol className='mt-3'>
                    <MDBCardText className='text-left user-info'>
                        <p>USER THREE:</p>
                        <p> Name: &emsp;&emsp;&emsp;John Doe </p>
                        <p>Username: &emsp; Jdoe</p>
                        <p>password: &emsp;&nbsp;1111</p>
                        </MDBCardText>
                    </MDBCol>
                    </MDBRow>
                
                </MDBContainer>
                    
            </MDBCardTitle>
            
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    )
}
export default Credentials;