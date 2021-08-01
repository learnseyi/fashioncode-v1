import React from 'react';
import CardImage from './CardImages';
import { MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBCard, 
    MDBBtn, 
    MDBCardTitle, 
    MDBView, 
    MDBCardImage, 
    MDBMask, 
    MDBCardBody, 
    MDBCardText, 
} from 'mdbreact';
const Cards = () =>{
    const titles = ['Free Debit Card','Friendly Advisors','Investment Oppurtunities'];

    return(
        <MDBContainer className='d-flex position-relative justify-content-center' style={{bottom:'3.5rem'}} fluid>
      <MDBContainer  >
        <MDBRow className="mx-1">
          {titles.map((title,i)=>{
              return(
                <MDBCol  key={Date.now().toString()+ title}md="4" className="mb-4 mb-md-0 ">
                <section>
                  <MDBCard  narrow  style={{background: '#f4f4f4'}}>
                    <MDBView hover cascade >
                    <MDBCardTitle className='pt-4 text-center' >{title}</MDBCardTitle>
                      <MDBCardImage key={Date.now().toString() }className='p-3' src={CardImage[i]} alt="card image" top></MDBCardImage>
                      <MDBMask waves='true' className="img-gradient"></MDBMask>
                    </MDBView>
                    <MDBCardBody cascade className=' d-flex flex-column justify-content-center'>
                      <MDBCardTitle>{title}</MDBCardTitle>
                      <MDBCardText>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</MDBCardText>
                      <hr className='text-center w-50 pt-3' style={{ borderTop: '2px solid lightgreen'}}/>
                      <MDBBtn color="success">Talk to us today</MDBBtn>
                    </MDBCardBody>
                  </MDBCard>
                </section>
              </MDBCol>
              )
          })}
        </MDBRow>
      </MDBContainer>
      </MDBContainer>
    )
}

export default Cards;