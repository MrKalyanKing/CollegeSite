import React from 'react'
import './Feedback.css'
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Button, Page, setOptions, Toast } from '@mobiscroll/react';
import { useCallback, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBRadio,
    
  }
  from 'mdb-react-ui-kit';
 // import MDBSelect from 'mdb-react-ui-kit/dist/mdb-select';

// setOptions({
//     theme: 'ios',
//     themeVariant: 'light'
//   });
  
const Feedback = () => {

    

  return (
    

    <div class="container-fluid">
        <div class="row justify-content-center align-items-center vh-100 feedback">
            <div class="col-md-8 col-lg-12">
                <div class="card my-4">
                    <div class="row g-0">
                        <div class="col-md-5 d-none d-md-block">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp" 
                                 alt="Sample photo" class="img-fluid rounded-start"/>
                        </div>
                        <div class="col-md-7">
                            <div class="card-body text-black d-flex flex-column justify-content-center">
                                <h3 class="mb-5 text-uppercase fw-bold">Student Registration Form</h3>

                                
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-4">
                                            <label for="form1" class="form-label">First Name</label>
                                            <input type="text" class="form-control form-control-lg" id="form1" placeholder="Enter first name"/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-4">
                                            <label for="form2" class="form-label">Last Name</label>
                                            <input type="text" class="form-control form-control-lg" id="form2" placeholder="Enter last name"/>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Birthday Input Field --> */}
                                <div class="mb-4">
                                    <label for="form3" class="form-label">Birthday</label>
                                    <input type="text" class="form-control form-control-lg" id="form3" placeholder="Enter birthdate"/>
                                </div>

                                {/* <!-- Gender Radio Buttons --> */}
                                <div class="d-md-flex justify-content-start align-items-center mb-4">
                                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio1" value="option1"/>
                                        <label class="form-check-label" for="inlineRadio1">Female</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio2" value="option2"/>
                                        <label class="form-check-label" for="inlineRadio2">Male</label>
                                    </div>
                                    <div class="form-check form-check-inline">
                                        <input class="form-check-input" type="radio" name="inlineRadio" id="inlineRadio3" value="option3"/>
                                        <label class="form-check-label" for="inlineRadio3">Other</label>
                                    </div>
                                </div>

                                {/* <!-- State and City Select Dropdowns --> */}
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="mb-4">
                                            <label for="stateSelect" class="form-label">State</label>
                                            <select id="stateSelect" class="form-select form-select-lg">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="mb-4">
                                            <label for="citySelect" class="form-label">City</label>
                                            <select id="citySelect" class="form-select form-select-lg">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- Pincode, Course, and Email Inputs --> */}
                                <div class="mb-4">
                                    <label for="form4" class="form-label">Pincode</label>
                                    <input type="text" class="form-control form-control-lg" id="form4" placeholder="Enter pincode"/>
                                </div>
                                <div class="mb-4">
                                    <label for="form5" class="form-label">Course</label>
                                    <input type="text" class="form-control form-control-lg" id="form5" placeholder="Enter course"/>
                                </div>
                                <div class="mb-4">
                                    <label for="form6" class="form-label">Email ID</label>
                                    <input type="email" class="form-control form-control-lg" id="form6" placeholder="Enter email"/>
                                </div>

                                {/* <!-- Reset and Submit Buttons --> */}
                                <div class="d-flex justify-content-end pt-3">
                                    <button type="reset" class="btn btn-light btn-lg">Reset all</button>
                                    <button type="submit" class="btn btn-warning btn-lg ms-2">Submit form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



  )
}

export default Feedback
