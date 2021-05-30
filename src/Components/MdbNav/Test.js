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
               
                
                <MDBNavbarBrand className='position-absolute' style={{zIndex:1,top:10+'px'}} > 
                <img src={Logo}  height= '100'alt="slim-logo" ></img>
                 </MDBNavbarBrand>
                
                    
                    <MDBNavbarNav right className='pr-5 d-sm-flex' style={{fontSize:'1.2rem'}} >
                            <MDBNavItem >
                                <img style={{width:'65px'}}src={flag} alt={name}/>
                            </MDBNavItem>
                            <MDBNavItem>
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
                    <MDBNavbarNav  className=" justify-content-center align-items-center" style={{fontSize:'1.3rem'}}>
                            <MDBNavItem   active >
                            <MDBNavLink activeClassName='active' exact to="/">Home</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                            <MDBNavLink   to="/aboutPage">Features</MDBNavLink>
                            </MDBNavItem>
                            <MDBNavItem >
                            <MDBNavLink to="/">Pricing</MDBNavLink>
                            </MDBNavItem>
                    </MDBNavbarNav>
                    </MDBCollapse>
                    </MDBNavbar>
                    
                    </section>
                 
            
           
            </>
        )
    }
   
    export default Test;