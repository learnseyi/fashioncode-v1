import React,{useEffect,useState} from "react";
import Image from './Images/Image'
import { 
    MDBAnimation,
    MDBJumbotron, 
    MDBBtn, 
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBCardTitle,
     MDBIcon
     } from "mdbreact";
     import './Jumbotron.css';

const JumbotronPage = () => {
    const [image,setImage] = useState(Image[0]);
    let [index,setIndex] = useState(0);
    
useEffect(()=>{
    setTimeout(()=>{
        if(index < Image.length-1){
            setIndex((prevInt)=>{
                return prevInt + 1
            })
            setImage(Image[index])
        }else{
            setIndex((prevInt)=>{
                return prevInt =  0
            })
            setImage(Image[index])
        }
    },15000)
},[index])
  return (
    <section>
    <MDBContainer style={{ padding: 0 }} fluid>
      <MDBRow>
        <MDBCol >
        <MDBAnimation type="zoomIn" duration="4s" delay="2s" >
          <MDBJumbotron style={{ padding: 0 }}>
      <MDBCol className=" text-center  px-4 " style={{ backgroundImage: `url(${image})`,backgroundSize: 'cover',
      backgroundRepeat:'no-repeat',maxWidth:'100%',height:'auto' ,backgroundPosition:'center'}}>
          <MDBAnimation type="slideInDown" duration="4s" delay="2s" >
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive  mt-5 font-bold heading">Slim's Financial</MDBCardTitle>
                {/* <h4 className="mx-5 mb-5 font-bold">We make your financial dreams come true</h4> */}
                <MDBBtn  color="success" className="mb-5 " ><MDBIcon icon="clone" className="mr-2 text-white"></MDBIcon>Join Us</MDBBtn>
              </MDBCol>
              </MDBAnimation>
            </MDBCol>
          </MDBJumbotron>
          </MDBAnimation>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </section>
  )
}

export default JumbotronPage;