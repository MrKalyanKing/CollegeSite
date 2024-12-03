import React, { useEffect } from "react";
import "./Feedback.css";

import { useCallback, useState } from "react";
import upload from '@/assets/upload_area.png'

const Feedback = () => {
  const floorClasses = {
    1: ["Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E"],
    2: ["Class 58", "Class 63", "Class 64", "Class 65", "Class 81","Class 78","Class 68","Class 69"],
    3: ["Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E"],
    4: ["Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"],
  };
  const [selectedFloor, setSelectedFloor] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [images,setImage]=useState(null)
  const [data,setData]=useState({
    name:'',
    email:'',
    hallticket:'',
    gender:'',
    floor:'',
    class:'',
    course:'',
    description:'',

  })
 // logging the value
  useEffect(()=>{
   console.log(data,data.class,data.floor,data.course)
  },[data])


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  
  const handleFloorChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      floor: value,
      class: "", // Clear class selection when floor changes
    }));

    // Update available classes based on selected floor
    if (floorClasses[value]) {
      setAvailableClasses(floorClasses[value]);
    } else {
      setAvailableClasses([]);
    }
  };

  // Handle class selection change
  const handleClassChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      class: value,
    }));
  };
  
  //Hnadle course selecion
  const handlecourseChange=(e)=>{
    const {value}=e.target;
    setData((prevData)=>({
        ...prevData,
        course:value
    }));
  }






  return (
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center vh-100 feedback">
        <div class="col-md-8 col-lg-12">
          <div class="card my-4">
            <div class="row g-0">
              <div class="col-md-5 d-none d-md-block">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                  alt="Sample photo"
                  class="img-fluid rounded-start"
                />
              </div>
              <div class="col-md-7">
                <div class="card-body text-black d-flex flex-column justify-content-center">
                  <h3 class="mb-5 text-uppercase fw-bold">
                    Student Report on Damaged Property Form
                  </h3>

                  <div class="row">
                    <div class="col-md-6">
                      <div class="mb-4">
                        <label for="form1" class="form-label">
                          Email
                        </label>
                        <input
                          type="text"
                          name="email"
                          class="form-control form-control-lg"
                          id="form1"
                          placeholder="Enter Email"
                          onChange={onChangeHandler} value={data.email}
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="mb-4">
                        <label for="form2" class="form-label">
                           Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          class="form-control form-control-lg"
                          id="form2"
                          placeholder="Enter  name"
                          onChange={onChangeHandler} value={data.name}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <!-- Hallicket Input Field --> */}
                  <div class="mb-4">
                    <label for="form3" class="form-label">
                      HallTicke Number
                    </label>
                    <input
                      type="text"
                      name="hallticket"
                      class="form-control form-control-lg"
                      id="form3"
                      placeholder="Enter Hallticket number"
                      onChange={onChangeHandler} value={data.hallticket}
                    />
                  </div>

                  {/* <!-- Gender Radio Buttons --> */}
                  <div class="d-md-flex justify-content-start align-items-center mb-4">
                    <h6 class="fw-bold mb-0 me-4">Gender: </h6>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        
                        type="radio"
                        name="gender"
                        id="inlineRadio1"
                        value="female"
                        checked={data.gender=='female'}
                        onChange={onChangeHandler} 
                      />
                      <label class="form-check-label" for="inlineRadio1">
                        Female
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio2"
                        value="male"
                        checked={data.gender=='male'}
                        onChange={onChangeHandler}
                      />
                      <label class="form-check-label" for="inlineRadio2">
                        Male
                      </label>
                    </div>
                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gender"
                        id="inlineRadio3"
                        value="other"
                        checked={data.gender=='other'}
                        onChange={onChangeHandler}
                      />
                      <label class="form-check-label" for="inlineRadio3">
                        Other
                      </label>
                    </div>
                  </div>

                  {/* <!-- State and Floor & classes Select Dropdowns --> */}
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label htmlFor="floorSelect" className="form-label">
                          Floor
                        </label>
                        <select
                          id="floor"
                          className="form-select form-select-lg"
                          name="floor"
                          value={data.floor}
                          onChange={handleFloorChange}
                        >
                          <option value="">Select Floor</option>
                          <option value="1">1st Floor</option>
                          <option value="2">2nd Floor</option>
                          <option value="3">3rd Floor</option>
                          <option value="4">4th Floor</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <label htmlFor="classSelect" className="form-label">
                          Class
                        </label>
                        <select
                          id="classSelect"
                          className="form-select form-select-lg"
                          name="class"
                          value={data.class}
                          onChange={handleClassChange}
                        >
                          <option value="">Select Class</option>
                          {availableClasses.map((cls, index) => (
                            <option key={index} value={cls}>
                              {cls}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Pincode, Course, and Email Inputs --> */}
                  <div class="mb-4">
                    <label for="form4" class="form-label">
                      Course
                    </label>
                    <select
                          id="floorSelect"
                          name="course"
                          className="form-select form-select-lg"
                          value={data.course}
                          
                          onChange={handlecourseChange}

                        >   
                            <option value="">Select Course</option>
                            <option value="BTECH">BTECH</option>
                    </select>
                  </div>
                  <div class="mb-4">
                    <label for="form5" class="form-label">
                      Discription
                    </label>
                    <textarea
                      type="text"
                      name="description"
                      class="form-control form-control-lg"
                      id="form5"
                      placeholder="Describe Your Problem"
                      value={data.description}
                      onChange={onChangeHandler}

                    />
                  </div>
                  <div class="mb-4">
                    <label htmlFor="image" for="form6" class="form-label image-upload">
                      UPload Image
                      <img src={images ? URL.createObjectURL(images): upload} alt="upload" style={{ width: "100px", height: "100px" }}/>
                    </label>
                    <input
                      type="file"
                      class="form-control form-control-lg"
                      id="image" hidden
                      onChange={(e)=>setImage(e.target.files[0])}
                    />
                  </div>

                  {/* <!-- Reset and Submit Buttons --> */}
                  <div class="d-flex justify-content-center pt-3 text-center">
                    {/* <button type="reset" class="btn btn-light btn-lg">
                      Reset all
                    </button> */}
                    <button  type="submit" className="btn btn-warning btn-lg ms-2">
                      Submit form
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
