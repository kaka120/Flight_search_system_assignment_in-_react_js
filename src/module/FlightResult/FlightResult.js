import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBContainer, MDBCardTitle, MDBCardText,  MDBCol,MDBRow } from 'mdbreact';
import './FlightRsult.scss'
import logo from '../../assects/pic_logo.png';

function FlightResult({ items }) {
  let length = items.length;
  console.log("items")
  console.log(items)
  if(length > 0) {
    return (
      <ul className="wrapper_class_scroll_property" >
        {items.map(item =>
          <ul key={item.flight_id}>
                <div className="container-flex margin_class">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card card_custom_shadow">
                        <div className="card-body custom_padding">
                          <table className="table_width">
                            <tbody>
                            <tr>
                              <td><img src={logo} className="Item-logo" alt="logo" width="36p"/></td>
                                <td>{item.source} {`>`} {item.destination}</td>
                                <td>{item.flight_id}</td>
                                <td>{item.departs_at}</td>
                                <td>{item.arrives_at}</td>
                                <td><button className="btn btn-sm btn btn-danger">Rs/{item.fare}</button></td>
                              </tr>
                            </tbody>
                          </table>
                         </div>
                      </div> 
                    </div>
                  </div>
                </div>
            </ul>
        )}
      </ul>
    );
  } else {
    return (
        <div className="card card_custom_shadow">
            <div className="card-header">NO FLIGHT FOUND</div>
        </div>
    );
  }
}

export default FlightResult;

