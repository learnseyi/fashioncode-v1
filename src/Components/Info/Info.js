import React,{ Suspense, lazy } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Image from './Images/imga.jpg'
import { 
    MDBBox,
    MDBCol, 
    MDBContainer, 
    MDBLink, 
    MDBRow 
} from 'mdbreact';


const Info = () =>{
    return(
        <Router>
            <MDBBox style={{backgroundColor:'white'}}>
        <MDBContainer  className='p-5'  >
            <MDBRow className='justify-content-between'>
                <MDBCol  md='7'style={{padding:0}} >
                <MDBContainer >
                       <MDBRow style={{border:'2px solid lightgreen'}}>
                           <MDBCol md='6' style={{background:`url(${Image})`,
                           backgroundPosition:'center', backgroundSize:'cover', height:'25rem',width:'100%',backgroundRepeat:'no-repeat'}}>
                           </MDBCol >
                           <MDBCol md='6'  className='text-center ' style={{padding:0}}>
                            <h2 className='px-auto'>We are here for you</h2>
                            <h5 className='p-3 text-justify'>Cras venenatis quam erat, 
                                ac posuere lacus pellentesque at. Suspendisse vulputate magna nibh, 
                                vel ultrices turpis egestas in.</h5>
                                <MDBBox className='text-left'>
                               <MDBLink to='/'> &#62; &nbsp; &nbsp;  Free Debit Card</MDBLink>
                               <MDBLink to='/'> &#62; &nbsp;&nbsp;   Electronic Transfer</MDBLink>
                               <MDBLink to='/'> &#62;  &nbsp;&nbsp;  Free Debit Card</MDBLink>
                               </MDBBox>
                               <hr/>
                               <MDBLink to='/' className='text-right'> Learn More</MDBLink>
                           </MDBCol>
                           </MDBRow>
                           </MDBContainer>
                    </MDBCol>
                    <MDBCol style={{border:'2px solid lightgreen'}}   md='4'>
                    <h2>We are there for you</h2>
                        <h5>
                        Cras venenatis quam erat, ac posuere lacus pellentesque at. Suspendisse vulputate magna nibh,
                         vel ultrices turpis egestas in. Pellentesque mi dolor, tempor vitae semper non, elementum ut nisi. 
                        </h5>
                        <MDBBox className='text-left'>
                               <MDBLink to='/'> Free Debit Card</MDBLink>
                               <MDBLink to='/'> Free Debit Card</MDBLink>
                               <MDBLink to='/'> Free Debit Card</MDBLink>
                               </MDBBox>
                        <hr/>
                        <MDBLink to='/' className='text-right'> Learn More</MDBLink>   
                    </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBBox>
        </Router>
    )
}

export default Info;