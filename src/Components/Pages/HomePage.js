import React,{lazy,Suspense} from 'react';
import Test from '../MdbNav/Test';
import JumbotronPage from '../Jumbotron/Jumbotron'
import Card from '../Card/Card';
import Info from '../Info/Info';
import About from '../About/About';
import Operations from '../Operations/Operations'
import Footer from '../Footer/Footer';
import LoginForm  from '../Form/Form';


const info = lazy(()=>import('../Info/Info'))
const HomePage = ()=>{
    
    return(
        <>
         
            <LoginForm/>
         <Test />
         <JumbotronPage/>
         <Card />
         <Suspense fallback={<div>Loading...</div>}>
         <Info/>
      </Suspense>
         
         <About/>
         <Operations/>
         <Footer/>
          
         </>
    )
     
    }
    
export default HomePage;