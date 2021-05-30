import {BrowserRouter,Route} from 'react-router-dom';
import React,{useState} from 'react';
import Users from '../Form/Users';
import  {LoginContext}  from '../Contexts/LoginContext';
import ProtectedRoute from './ProtectedRoute';
import './App.css';
import HomePage from '../Pages/HomePage';
import AboutPage from '../Pages/AboutPage';
import Dashboard from '../Dashboard/Dashboard';





const App = (props)=>{
    const [isClicked, setIsClicked]= useState(false);
    const [username,setUsername] = useState()
    const [pass,setPass] = useState();
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [authUser,setAuthUser] = useState({})
    

    


    const disableScroll =(props)=>{
        document.body.style.overflow = 'hidden';
        document.querySelector('html').scrollTop = window.scrollY;
        }
        
        const enableScroll=()=>{
        document.body.style.overflow = null;
        }
    const handleLogin = () =>{
        setIsClicked(!isClicked);
        if(!isClicked){disableScroll()}
        else if(isClicked){enableScroll()}
    }
   
    
    const login=()=>{
        const curUser = Users.filter((el)=>{
           return el.username === username
        })
          if(curUser[0].username === username && curUser[0].pass.toString() === pass){
            setAuthUser(curUser[0]);
            setIsLoggedIn(true)
            enableScroll();
          }else{alert('invalid username or password')}
      }
    
    return( <React.Fragment>
        <LoginContext.Provider value={{isClicked,setIsClicked,handleLogin,setUsername,setIsLoggedIn,
        setPass,login,isLoggedIn,authUser,setAuthUser}}> 
         <BrowserRouter>
         
         <Route exact path='/' component={HomePage}>
             <HomePage/>
         </Route> 
         <Route exact path='/about' component={HomePage}>
             <AboutPage/>
         </Route>
         <ProtectedRoute   path='/Dashboard' isAuth={isLoggedIn} component={Dashboard}/>
         
         </BrowserRouter>
         </LoginContext.Provider>
       </React.Fragment>
    );
}

export default App;