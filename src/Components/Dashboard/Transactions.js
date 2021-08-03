import React,{useCallback, useContext,useEffect,useState} from 'react';
import ReactPaginate from 'react-paginate';
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
import './Transactions.css'



const Transactions = ()=>{
    const {authUser} = useContext(LoginContext);
    const [currentPage, setCurrentPage] = useState(0);
    const [balanceCO,setBalanceCO] = useState(0);
    const [authTransaction,setAutTransaction] = useState([]);
    const transaction = authUser.transaction;
    const retrieveTransaction = useCallback(()=>{
        transaction.map(trans=>{
            return setAutTransaction(authTransaction =>[...authTransaction,trans])
        })
    },[transaction])
   
    let curBalance = 0;
    let runningBalance = 0;
    const transList = [];
const PER_PAGE = 5;
const offset = currentPage * PER_PAGE;
const pageCount = Math.ceil(authTransaction.length / PER_PAGE);
const transactions = authTransaction.slice(offset, offset + PER_PAGE).map(({amount: trans},i)=>{
            runningBalance =  ( curBalance !== 0 ) ? curBalance : balanceCO; // 
            (balanceCO === 0 && runningBalance !== balanceCO) || transList.push(trans);
            trans = transList.length ? transList.reduce((prev,next)=>prev + next,0) : trans;
            curBalance =  runningBalance + trans;

        return(
            <tr key={i}>
            <td><MDBBadge color={trans > 0 ? 'success': 'danger'}>{trans > 0 ? 'D':'W'}</MDBBadge></td>
            <td>{new Date().toLocaleDateString()}</td>
            <td>{authUser.transaction[i].description}</td>
            <td>{!transList.length ? trans.toLocaleString('en-US') : transList.pop().toLocaleString('en-US')}</td>
            
            <td>{ curBalance.toLocaleString('en-US')}</td>
            </tr>
     )   
})

         function handlePageClick({ selected: selectedPage }) {
           balanceCO !== 0 ? setBalanceCO(0) : setBalanceCO(curBalance)  // update balance carried over on transaction list page change
    setCurrentPage(selectedPage);
}
useEffect(()=>{
    retrieveTransaction();
},[retrieveTransaction])
  
    return(
        <MDBContainer>
            <MDBRow>
                <MDBCol md='2'></MDBCol>
                <MDBCol md='7'>
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
          {transactions}
      </MDBTableBody>
    </MDBTable>
    
          <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
          
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