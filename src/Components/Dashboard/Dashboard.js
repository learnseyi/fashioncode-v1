import React,{useContext} from 'react';
// import Logo from '../MdbNav/logo.png'
import {BrowserRouter,withRouter,useHistory} from 'react-router-dom'
import Footer from '../Footer/Footer';
import './Dashboard.css'
import Display from './Display';
import Transactions from './Transactions';
import {
    MDBNavbar,
    // MDBNavbarBrand, 
    // MDBNavbarNav, 
    // MDBNavItem,  
    // MDBNavbarToggler, 
    // MDBCollapse,
    MDBBtn
    } from "mdbreact";
import { LoginContext } from '../Contexts/LoginContext';




const Dashboard = (props)=>{
    const {setIsLoggedIn,isLoggedIn,setIsClicked} = useContext(LoginContext)
    // const [isOpen,setIsOpen] = useState(false);
    // const date = new Date()
    let history = useHistory()
    // const toggle = () => setIsOpen(!isOpen);

    const handleLogout = (e)=>{
        e.preventDefault();
        setIsClicked(false);
        setIsLoggedIn(!isLoggedIn) 
        history.push('/');
    }
   
    return(
        
         <>
                <MDBNavbar className='px-5 'color='indigo darken-4' dark expand='md' >
                {/* <div className="d-flex  align-self-center  h-100  position-absolute" style={{top:'8px',left:'9vmin',zIndex:'9000'}}>
                <MDBNavbarBrand className='position-relative-lg my-auto float-sm-left' > 
                <img src={Logo}  height= '100'alt="slim"></img>
                    </MDBNavbarBrand>
                </div>
                <MDBNavbar className='d-sm-inline d-md-none'></MDBNavbar>
                
                <MDBNavbarToggler right onClick={toggle} />
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right className='pr-5' style={{fontSize:'1.2rem'}} >
                            
                            <MDBNavItem>
                            <h5 style={{color:'white'}}>{date.toDateString()}</h5>
                            </MDBNavItem>
                            <MDBNavItem>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse> */}
                    
                    <MDBBtn  color='success'  className=' z-depth-3 rounded-pill justify-content-end' size="md" onClick={handleLogout}>Logout</MDBBtn>
                   
                </MDBNavbar>
                
            <BrowserRouter>
             <div className='dash-wrapper'>
             <Display/>
             <Transactions/>
             
        </div>
        <Footer/>
        </BrowserRouter>
        </>
    )
}
export default withRouter(Dashboard);
