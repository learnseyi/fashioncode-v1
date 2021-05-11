import React,{useState,useContext} from 'react';
import Logo from './logo.png'
import {
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse,
    MDBBtn,
    } from "mdbreact";
import { Navbar } from 'reactstrap';
import  {LoginContext}  from '../Contexts/LoginContext';
import {useFetch} from '../MyHooks/useFetch'



    
    const Test = () =>{
        const url = 'https://restcountries.eu/rest/v2/name/canada';
        const [isOpen,setIsOpen] = useState(false);
        const data = useFetch(url)
        const {name,flag} = data
        const date = new  Date()
        const {handleLogin} = useContext(LoginContext)

        const hoverEffect = (e)=>{
            if(e.target.hasAttribute('href') && e.type === 'mouseover') {
                e.target.style.background = 'lightgreen'
            }
         }
            const moueseleaveEffect = (e)=>{
                if(e.target.hasAttribute('href') && e.type === 'mouseout'){
                    e.target.style.background = 'transparent'
            }
        }
       
        const toggle = () => setIsOpen(!isOpen);
        return(<>
            
                
                <section>
                <MDBNavbar className='px-5 'color='indigo darken-4' dark expand='md' >
                <Navbar className='d-sm-block d-md-none'></Navbar>
                <div className="  h-100  position-absolute" style={{top:'8px',left:'7vmin'}}>
                <MDBNavbarBrand className=' float-sm-left' > 
                <img src={Logo}  height= '100'alt="slim"></img>
                    </MDBNavbarBrand>
                </div>
                
                    <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBNavbarNav right className='pr-5' style={{fontSize:'1.2rem'}} >
                            <MDBNavItem >
                                <img style={{width:'65px'}}src={flag} alt={name}/>
                            </MDBNavItem>
                            <MDBNavItem>
                            <h5 style={{color:'white'}}>{date.toDateString()}</h5>
                            </MDBNavItem>
                            <MDBNavItem>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                    
                    <MDBBtn  color='success'  className=' z-depth-3 rounded-pill ' size="sm" onClick={handleLogin}>Login</MDBBtn>
                    <MDBNavbarToggler right onClick={toggle} />
                </MDBNavbar>
               
                <MDBNavbar className='d-none d-md-block' color='light' primary='true' expand='md' onMouseOver={hoverEffect} onMouseOut={moueseleaveEffect}>
                    <MDBNavbarNav className='justify-content-center  align-item-center' right style={{fontSize:'1.3rem'}}>
                            <MDBNavItem  className='ml-3' active >
                            <MDBNavLink activeClassName='active' exact to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='ml-3'>
                            <MDBNavLink   to="/aboutPage">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem className='ml-3'>
                            <MDBNavLink to="/">Pricing</MDBNavLink>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBNavbar>
                    </section>
                 
            
           
            </>
        )
    }
   
    export default Test;