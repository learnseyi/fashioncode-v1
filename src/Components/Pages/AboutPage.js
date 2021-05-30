import React from 'react';
import {BrowserRouter,NavLink,useHistory} from 'react-router-dom';



const AboutPage = ()=>{
    let history = useHistory()
    
    const goToHome = ()=>{
            history.push('/')
            document.body.style.overflow = null;
    }

    return(
        <BrowserRouter>
        <h1 className='text-center'>I am about page</h1>
        <NavLink onClick={goToHome}to='/'>Home Page</NavLink>
        </BrowserRouter>
        
    )
}

export default AboutPage;