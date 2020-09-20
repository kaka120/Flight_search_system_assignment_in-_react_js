import React,{ Fragment, useState,Component } from "react";
// Nouislider related import section
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
// Nouislider related import section
import data from '.././../assects/data.json';
import FlightResult from '../FlightResult/FlightResult';
import './FlightSearch.scss'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';



 class FlightSearch extends Component {
  constructor(props){
    super(props);
    this.state = {
        source_code: '',
        destination_code: '',
        data: []
    }
    this.handleSourceChange = this.handleSourceChange.bind(this)
    this.handleDestinationChange = this.handleDestinationChange.bind(this)
    this.handleRangeChange = this.handleRangeChange.bind(this)
    this.findDataByFilterOptions = this.findDataByFilterOptions.bind(this)
    this.rangecomparison = this.rangecomparison.bind(this)
  }
  

  handleSourceChange = (event) =>{
    this.setState({
        source_code:event.target.value
    })
    console.log(this.state)
  }

  handleDestinationChange = (event) =>{
    this.setState({
      destination_code:event.target.value
    })
    console.log(this.state)
   
  }

  handleRangeChange = (event) =>{
     const priceRange = {
      lowerBound: parseInt(event[0]),
      upperBound:parseInt(event[1])
    };
    const result_data = this.findDataByFilterOptions(data, { source_code: this.state.source_code ,destination_code: this.state.destination_code })
    const final_resukt = this.rangecomparison(result_data, priceRange)
    console.log(final_resukt)
    this.setState({
      data: final_resukt
    });
 
  }
 
  rangecomparison = (data, filterOption) => {
      return data.filter(data=>{
          return (data.fare >= filterOption.lowerBound && data.fare <= filterOption.upperBound);
      })
  } 

    findDataByFilterOptions = (data, filterOption) => {
        return data.filter(data=>{
            return Object.keys(filterOption).every(function(key) {
              return (data[key].toUpperCase().indexOf(filterOption[key].toUpperCase()) === 0);
            });
        })
    }
  flightSearch = event =>{
    event.preventDefault();
    this.setState({
      data: []
    });
    const result_data = this.findDataByFilterOptions(data, { source_code: this.state.source_code ,destination_code: this.state.destination_code })
    this.setState({
      data: result_data
    });
  }

  render(){
    return(
           <Fragment>
             <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header card_custom_css">Flight Search Panel</div>
                <div className="card-body">
                    <form onSubmit={this.flightSearch}>
                      <div className="form-group">
                        <label htmlFor="example2" className="form-control form-control-md">Select Source City</label>
                        <select value={this.state.source} className="browser-default custom-select" onChange={this.handleSourceChange} required>
                            <option value="">select</option>
                            <option value="KOL">KOLKATA</option>
                            <option value="PUN">PUNE</option>
                            <option value="MUM">MUMBAI</option>
                            <option value="DEL">DELHI</option>
                            <option value="BLR">BANGLORE</option>
                        </select>
                      </div>
                      <div className="form-group">
                        <label htmlFor="example2" className="form-control form-control-md">Select Destination City</label>
                        <select value={this.state.destination} className="browser-default custom-select" onChange={this.handleDestinationChange} required>
                            <option value="">select</option>
                            <option value="KOL">KOLKATA</option>
                            <option value="PUN">PUNE</option>
                            <option value="MUM">MUMBAI</option>
                            <option value="DEL">DELHI</option>
                            <option value="BLR">BANGLORE</option>
                        </select>
                      </div>
                      <button type="submit" className="btn btn-primary">Search</button>               
                    </form>
                </div>
                <div className="container-flex">
                <div className="card">
                    <div className="card-header card_custom_css">Refine Search Panel</div>
                    <div className="card-body">
                      <Nouislider 
                        range={{ min: 1000, max: 10000 }} 
                        start={[1000, 10000]}  
                        onSlide={(data)=> this.handleRangeChange(data)}
                        connect 
                        tooltips/>
                      </div> 
                    <div className="card-footer">{}</div>
                    </div>
                </div>
              </div>
             
              </div>
              <div className="col-lg-8">
                <FlightResult
                     items={this.state.data}
                  />
              </div>
              </div>
            </Fragment>
    )
  }
}

export default FlightSearch;


