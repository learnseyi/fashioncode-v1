import './Operations.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBox,
    MDBLink
}
from 'mdbreact';
import ImageUrl from './images/Images'
const Operations = ()=>{

    return <div >
        <MDBBox  className='wrapper'>
        <MDBContainer style={{padding:0}} >
            <MDBRow className=' pt-5 '>
                {ImageUrl.map((mainUrl,i)=>{
                    const {url,name,childLink} = mainUrl
                    return(
                        <MDBCol  key= {Date.now().toString()+ url} md='4' className='p-3 mb-3' >
                    <div   className='d-flex '>
                        <img src={url}   alt = {name}  style={{width:'40px',marginRight:'15px',fontColor:'lightgreen'}}/>
                        <h4>{name}</h4>
                    </div>
                    <Router>
                        {childLink.map( (link,i) =>{
                            return(
                                <MDBLink to='!#' key={Date.now().toString()+ link}className='pl-5'><h4>&gt; {link}</h4></MDBLink>
                            )
                        } )}
                    </Router>
                </MDBCol>
                    )
                })}
                
            </MDBRow>
        </MDBContainer>
        </MDBBox>
    </div>
}

export default Operations;
