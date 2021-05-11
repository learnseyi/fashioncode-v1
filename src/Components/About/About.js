import React,{useState} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './About.css';
import Tab from './Tab';
import {
    MDBBox,
    MDBCol,
    MDBContainer,
    MDBLink,
    MDBRow

}from 'mdbreact';

const About = ()=>{
    const [isDisplay,setIsDisplay] = useState(false);
    const wrapperRef = React.useRef();
    
    const clickHandler = (e) =>{
        const wrapper = wrapperRef.current;
        if(e.target.tagName === 'BUTTON'){
            setIsDisplay(!isDisplay);
            wrapper.classList.toggle('open')
            console.log(wrapper)
            
        }
        
    }
    return(
        <MDBContainer>
            <MDBRow className='pt-5'>
                <MDBCol md='6'>
                <h3>About Us</h3>
                <MDBBox className='d-flex justify-content-between p-3 border-bottom border-success' onClick={clickHandler}>
                    
                    <h4>Who we are</h4>
                    {isDisplay ? <button type='button' style={{border:'none',background:'none'}}> &#8897;</button>:
                    <button type='button' style={{border:'none',background:'none'}}> &#8896;</button>
                    }
                    
                </MDBBox>
                
                <MDBBox>
                    <Router>
                    <div  ref={wrapperRef}className= 'wrapper1'>
                         <MDBLink to='!#'className='border-bottom border-primary'>&#62;  Home</MDBLink>
                         <MDBLink to='!#' className='border-bottom border-primary'>&#62;  Home</MDBLink>
                         <MDBLink to='!#' className='border-bottom border-primary'>&#62;  Home</MDBLink>
                     </div>
                    </Router>
                </MDBBox>
                
                <MDBBox className='d-flex justify-content-between p-3 border-bottom border-success'>
                    <h4>Who we are</h4>
                    <button type='button' style={{border:'none',background:'none'}}> &#8896;</button>
                </MDBBox>
                
                </MDBCol>
                
                <MDBCol md='6'>
                    <Tab/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default About;