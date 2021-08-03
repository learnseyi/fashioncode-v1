import React,{useContext} from 'react';
import {BrowserRouter,withRouter,useHistory} from 'react-router-dom'
import Footer from '../Footer/Footer';
import './Dashboard.css'
import Display from './Display';
import Transactions from './Transactions';
import {
    MDBNavbar,
    MDBBtn
    } from "mdbreact";
import { LoginContext } from '../Contexts/LoginContext';




const Dashboard = (props)=>{
    const {setIsLoggedIn,isLoggedIn,setIsClicked} = useContext(LoginContext)
    let history = useHistory()
    const handleLogout = (e)=>{
        e.preventDefault();
        setIsClicked(false);
        setIsLoggedIn(!isLoggedIn) 
        history.push('/');
    }
   
    return( <React.Fragment>
                <MDBNavbar className='px-5 'color='indigo darken-4' dark expand='md' >        
                    <MDBBtn  color='success'  className=' z-depth-3 rounded-pill justify-content-end' size="md" onClick={handleLogout}>Logout</MDBBtn>
                </MDBNavbar>
            <BrowserRouter>
             <div className='dash-wrapper'>
             <Display/>
             <Transactions/>
        </div>
        <Footer/>
        </BrowserRouter>
        </React.Fragment>
    )
}
export default withRouter(Dashboard);
