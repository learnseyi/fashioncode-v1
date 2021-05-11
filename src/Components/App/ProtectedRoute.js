import React from 'react';
import PropTypes from 'prop-types';
import {Route,Redirect} from 'react-router-dom';

const ProtectedRoute = ({isAuth,component:Component,...rest})=>{
    console.log(Component,isAuth)
    return (
        <Route 
    {...rest} 
    render={(props)=>{
        if(isAuth){
            return(
                <Component {...props}/>
            )
        }else{
            <Redirect  to={{
                pathname:'/',
                state: {from: props.location}
            }}
            />
        }
    }
    }
    />
    )
}
export default ProtectedRoute;

ProtectedRoute.propTypes={
    isAuth: PropTypes.bool.isRequired
}