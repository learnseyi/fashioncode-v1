import React,{useContext} from 'react';
import './Dashboard.css'
import { 
    MDBContainer,
    MDBRow,
    MDBCol
 } from 'mdbreact';
import {LoginContext} from '../Contexts/LoginContext'

const Display = ()=>{
    const {authUser} = useContext(LoginContext)
    const Balance = authUser.transaction.reduce((prev,next)=> prev + next,0)
    return(
        <MDBContainer fluid>
            <h1>Welcome {authUser.owner}</h1>
            <MDBRow className=' p-5 justify-content-center display'>
                <MDBCol md='2' className=' p-2 text-center  text-left mr-3'>
                    <div className = 'shadow-lg' style={{width:'100%',height:'100%',background:'lightgreen',padding:'20px',margin:'auto'}}>
                        <h3>Balance</h3>
                       <h1>{Balance.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</h1>
                    </div>
                    <h4>savings</h4>
                </MDBCol>
                <MDBCol md='2' className=' p-2 justify-content-center text-center display '>
                    <div className = 'shadow-lg'style={{width:'100%',height:'100%',background:'#ff0800',padding:'20px',margin:'auto'}}>
                    <h3>Balance</h3>
                       <h1>${0.00}</h1>
                    </div>
                    <h4>checking</h4>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
export default Display