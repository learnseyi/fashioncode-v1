import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './footer.css'

const FooterPage = () => {
  return (
    <MDBFooter color='indigo darken-4' className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" >
            <div className="footer-title">
            <h5 >About Slim's Financial</h5>
            <ul>
              <li>
                <a href='#!'>Who We Are</a>
              </li>
              <li>
              <a href='#!'>What we do</a>
              </li>
              <li>
              <a href='#!'>Where we are</a>
              </li>
            </ul>
            </div>
          </MDBCol>
          <MDBCol md="6">
            <div className='footer-title'>
            <h5 >Services</h5>
            <MDBRow>
            <MDBCol md="6">
            <ul>
              <li >
                <a href="#!">banking</a>
              </li>
              <li >
                <a href="#!">investment management</a>
              </li>
              <li >
                <a href="#!">insurance</a>
              </li>
            </ul>
            </MDBCol>
            <MDBCol md="6">
            <ul>
              <li >
                <a href="#!">Investor & Treasury Services</a>
              </li>
              <li >
                <a href="#!">wealth management</a>
              </li>
              <li >
                <a href="#!">capital markets</a>
              </li>
            </ul>
            </MDBCol>
            </MDBRow>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="#Home"> Slim's Financial </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;