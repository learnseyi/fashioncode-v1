import React,{useContext,useState,useEffect, useCallback} from 'react';
import './Dashboard.css'
import { 
    MDBContainer,
    MDBRow,
    MDBCol
 } from 'mdbreact';
import {LoginContext} from '../Contexts/LoginContext'
const Display = ()=>{
    const [userTransaction,setUserTransaction] = useState([]);
    const {authUser} = useContext(LoginContext)
    const transaction = authUser.transaction;
    const Balance = userTransaction.reduce((prev,next)=> prev + next,0)
   const getTransaction = useCallback(()=>{
       transaction.forEach((trans,i)=>{
           return setUserTransaction(userTransaction =>[...userTransaction,trans.amount]);
       })
   },[transaction])
    useEffect(()=>{
        getTransaction();
    },[getTransaction])
    return(
        <MDBContainer fluid>
            <h1>Welcome {authUser.owner}</h1>
            <MDBRow className=' m-5 justify-content-center display'>
                <MDBCol md='2' className='mt-5  p-2 text-center  text-left mr-3'>
                    <div className = 'shadow-lg' style={{width:'100%',height:'100%',background:'lightgreen',padding:1+ 'em',margin:'auto'}}>
                        <h3>Balance</h3>
                       <h3>{Balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h3>
                    </div>
                    <div className='mb-3'>
                    <h3>savings</h3>
                    </div>
                    
                </MDBCol>
                <MDBCol md='2' className=' mt-5 p-2  text-center display '>
                    <div className = 'shadow-lg'style={{width:'100%',height:'100%',background:'#ff0800',padding:'20px',margin:'auto'}}>
                    <h3>Balance</h3>
                       <h1>${0.00}</h1>
                    </div>
                    <div>
                    <h4>checking</h4>
                    </div>
                    
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Display