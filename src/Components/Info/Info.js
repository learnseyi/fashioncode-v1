import { BrowserRouter as Router } from 'react-router-dom';
import Image from './Images/image-1.jpg'
import './info.css';
import { 
    MDBBox,
    MDBCol, 
    MDBContainer, 
    MDBLink, 
    MDBRow,
    MDBBtn
} from 'mdbreact';


const Info = () =>{
    return(
        <Router>
            <MDBBox style={{backgroundColor:'#f4f4f4'}}>
        <MDBContainer  className='p-5'  >
            <MDBRow className='justify-content-between'>
                <MDBCol  md='7'style={{padding:0}} >
                <MDBContainer >
                       <MDBRow style={{border:'2px solid lightgreen'}}>
                           <MDBCol md='6' style={{background:`url(${Image})`,
                           backgroundPosition:'center', backgroundSize:'cover', height:'27rem',width:'27rem',backgroundRepeat:'no-repeat'}}>
                           </MDBCol >
                           <MDBCol md='6'  className='text-center ' style={{padding:0}}>
                            <h4 className='px-auto mt-3 info-title'>We are here for you</h4>
                            <p className='p-3 text-left info-text'>Cras venenatis quam erat, 
                                ac posuere lacus pellentesque at. Suspendisse vulputate magna nibh, 
                                vel ultrices turpis egestas in.</p>
                                <MDBBox className='text-left mb-4 '>
                               <MDBLink to='/' className ='sub-link'> &mdash; &nbsp; &nbsp;  Free Debit card</MDBLink>
                               <MDBLink to='/' className ='sub-link'> &mdash; &nbsp;&nbsp;   Electronic transfer</MDBLink>
                               <MDBLink to='/' className ='sub-link'> &mdash;  &nbsp;&nbsp;  High interest rates</MDBLink>
                               </MDBBox>
                               <hr/>
                               <MDBLink to='/' className='info-link'> 
                               <MDBBtn color="success">Learn More</MDBBtn>
                               </MDBLink>
                           </MDBCol>
                           </MDBRow>
                           </MDBContainer>
                    </MDBCol>
                    <MDBCol style={{border:'2px solid lightgreen'}}   md='4'>
                    <h4 className='text-center m-3 info-title'>Our Offerings</h4>
                        <p className = 'info-text'>
                        Cras venenatis quam erat, ac posuere lacus pellentesque at. Suspendisse vulputate magna nibh,
                         vel ultrices turpis egestas in. Pellentesque mi dolor, tempor vitae semper non, elementum ut nisi. 
                        </p>
                        <MDBBox className='text-left mb-4'>
                               <MDBLink to='/' className ='sub-link'> &mdash; &nbsp; &nbsp;We Listen</MDBLink>
                               <MDBLink to='/'className ='sub-link'>&mdash; &nbsp; &nbsp; We Provide Advice</MDBLink>
                               <MDBLink to='/'className ='sub-link'> &mdash; &nbsp; &nbsp;We Provide Support</MDBLink>
                               </MDBBox>
                        <hr/>
                        <MDBLink to='/' className='info-link'> 
                        <MDBBtn color="success">Learn More</MDBBtn>
                        </MDBLink>   
                        
                    </MDBCol>
            </MDBRow>
        </MDBContainer>
        </MDBBox>
        </Router>
    )
}

export default Info;