import React from 'react';
import Test from '../MdbNav/Test';
import JumbotronPage from '../Jumbotron/Jumbotron'
import Card from '../Card/Card';
import Info from '../Info/Info';
import About from '../About/About';
import Operations from '../Operations/Operations'
import Footer from '../Footer/Footer';
import LoginForm  from '../Form/Form';
import Credentials from '../Credentials/Credentials';


const HomePage = ()=>{
    
    return(
        <>
         
            <LoginForm/>
         <Test />
         <JumbotronPage/>
         <Card />
         <Info/>
         <About/>
         <Operations/>
         <Footer/>
         <Credentials/>
          
         </>
    )
     
    }
    
export default HomePage;