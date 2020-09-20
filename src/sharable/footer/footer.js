import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterComponent = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
             <a href=""> @ABC </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterComponent;