import React,{useState,useContext} from 'react';
import Logo from './logo.png'
import {
    MDBContainer,
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink, 
    MDBNavbarToggler, 
    MDBCollapse,
    MDBBtn,
    } from "mdbreact";
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
                    
                <MDBNavbar color='indigo darken-4' dark expand='md' >
               
                
                <MDBNavbarBrand className='position-absolute justify-content-start' style={{zIndex:1,top:10+'px'}} > 
                <img src={Logo}  height= '100'alt="slim-logo" ></img>
                 </MDBNavbarBrand>
                
                    
                    <MDBNavbarNav right className=' d-sm-flex'  >
                            <MDBNavItem >
                                <img style={{width:'65px'}}src={flag} alt={name}/>
                            </MDBNavItem>
                            <MDBNavItem className='d-md-inline d-none mr-5'>
                            <h5 style={{color:'white'}}>{date.toDateString()}</h5>
                            </MDBNavItem>
                            <MDBNavItem>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    
                    
                    <MDBBtn  color='success'  className=' z-depth-3 rounded-pill ' size="sm" onClick={handleLogin}>Login</MDBBtn>
                    <MDBNavbarToggler right onClick={toggle} />
                </MDBNavbar>
               
                <MDBNavbar className=' d-md-block' color='light' primary='true' expand='md' onMouseOver={hoverEffect} onMouseOut={moueseleaveEffect}>
                    
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
                    <MDBContainer className='w-50'>
                    <MDBNavbarNav   style={{fontSize:'1.3rem'}}>
                            <MDBNavItem   active >
                            <MDBNavLink activeClassName='active' exact to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                            <MDBNavLink   to="/features">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                            <MDBNavLink to="/">Pricing</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                            <MDBNavLink   to="/contact">Contact us</MDBNavLink>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBContainer>
                    </MDBCollapse>
                    </MDBNavbar>
                    
                    </section>
                 
            
           
            </>
        )
    }
   
    export default Test;