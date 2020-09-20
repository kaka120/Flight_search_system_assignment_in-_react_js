import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";
 import FlightSearch from '../../module/FightSearch/FlightSearch';
 import backgroundImage from '../../assects/img1.jpg'

const BodyComponent = () => {
  return (
    <MDBJumbotron fluid  >
      <MDBContainer>
        <FlightSearch/>  
      </MDBContainer>
  </MDBJumbotron>
  )
}

export default BodyComponent;

