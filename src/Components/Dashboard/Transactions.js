import React,{useContext} from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBBadge,
    MDBTable,
    MDBTableBody,
    MDBTableHead
} from 'mdbreact';
import { LoginContext } from '../Contexts/LoginContext';


const Transactions = ()=>{
    const {authUser} = useContext(LoginContext)
   
    let b =0;
    let c = 0;
    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol md='2'></MDBCol>
                <MDBCol md='7' className='px-5 '>
                <MDBTable  hover>
      <MDBTableHead color="primary-color" textWhite>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Balance</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
      {authUser.transaction.map((trans,i)=>{
                b = c + trans
                c = b
                return(
          <tr key={i}>
          <td><MDBBadge color={trans > 0 ? 'success': 'danger'}>{trans > 0 ? 'D':'W'}</MDBBadge></td>
          <td>{new Date().toLocaleDateString()}</td>
          <td>Mark</td>
          <td>{trans.toLocaleString('en-US')}</td>
         
          <td>{b.toLocaleString('en-US')}</td>
        </tr>
                )
            })}
        
      </MDBTableBody>
    </MDBTable>
                </MDBCol>
                <MDBCol md='3' className='p-2 '>
                    <MDBBtn className='rounded-pill w-75 shadow-lg'>Transfers</MDBBtn>
                    <MDBBtn className='rounded-pill w-75 shadow-lg'>Transactions</MDBBtn>
                    <MDBBtn className='rounded-pill w-75 shadow-lg'>E-Transfers</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}
export default Transactions