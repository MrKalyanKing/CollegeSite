import React, { useContext, useEffect } from "react";
import "./Feedback.css";

import { useState } from "react";
import upload from "@/assets/upload_area.png";
import { AppContext } from "../ContextProvider/AppContext";
import axios from "axios";
import Loginpopup from "../Loginpopup/Loginpopup";

const Feedback = ({setLogin}) => {
  const floorClasses = {
    1: ["Class 1A", "Class 1B", "Class 1C", "Class 1D", "Class 1E"],
    2: [
      "Class 58",
      "Class 63",
      "Class 64",
      "Class 65",
      "Class 81",
      "Class 78",
      "Class 68",
      "Class 69",
    ],
    3: ["Class 3A", "Class 3B", "Class 3C", "Class 3D", "Class 3E"],
    4: ["Class 4A", "Class 4B", "Class 4C", "Class 4D", "Class 4E"],
  };

  const { url } = useContext(AppContext);
  const [selectedFloor, setSelectedFloor] = useState("");
  const [availableClasses, setAvailableClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [image, setImage] = useState(null);
  const {token,setToken}=useContext(AppContext)
  const [data, setData] = useState({
    name: "",
    email: "",
    hallticket: "",
    gender: "",
    floor: "",
    class: "",
    course: "",
    description: "",
  });
   
  // logging the value
  // useEffect(() => {
  //   console.log(data, data.class, data.floor, data.course);
  // }, [data]);

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

  // Handle course selection
  const handlecourseChange = (e) => {
    const { value } = e.target;
    setData((prevData) => ({
      ...prevData,
      course: value,
    }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    // Construct the floors data based on selected floor and class
    const floors = [
      {
        floorNumber: Number(data.floor), // Assuming floor is selected as a number (e.g., "1", "2")
        classes: [data.class], // Only one class is selected for now
      },
    ];
  
    // Create the request payload formatted as the provided JSON
    const payload = {
      name: data.name,
      email: data.email,
      hallticket: data.hallticket,
      gender: data.gender,
      course: data.course,
      description: data.description,
      floors: floors, // This will contain the structured floors data
    };
  
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("hallticket", data.hallticket);
    formData.append("gender", data.gender);
    formData.append("course", data.course);
    formData.append("description", data.description);
  
    // Here we add floors as a JSON object, not stringified
    formData.append("floors", JSON.stringify(floors)); // Ensure floors are sent as JSON string
    formData.append("image", image);
    //console.log(formData);
    
    try {
      const response = await axios.post(`${url}/api/user/report`, formData);
      // console.log("Axios Response:", response);
      // console.log("Axios Response Data:", response.data);
  
      if (response.data.success) {
        // Reset form data
        setData({
          name: "",
          email: "",
          hallticket: "",
          gender: "",
          floor: "",
          class: "",
          course: "",
          description: "",
        });
        setImage(null);
        alert("Report Submitted Successfully");
      } else {
        alert("Report Not Submitted");
      }
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("An error occurred while submitting the report");
    }

     //email sent verificaion

  try {
    // Send the email
    const emailResponse = await axios.post(`${url}/api/sendemail`, payload);
    console.log("Email Response: ", emailResponse.data);

    if (emailResponse.data.success) {
      //alert("Report submitted and email sent successfully!");
      // Reset form data
      setData({
        name: "",
        email: "",
        hallticket: "",
        gender: "",
        floor: "",
        class: "",
        course: "",
        description: "",
      });
      setImage(null);
    } else {
      alert("Error sending email");
    }
  } catch (error) {
    console.error("Error during email submission: ", error);
    alert("An error occurred while submitting the report and sending the email");
  }


  };
   const isHallticket=data.hallticket.length>6;

  return (

    <div className="container-fluid">
      <div className="row emoji">
        <h1 className=" fs-2 fw-bold text-center">Submit Your Damaged Property Here &#128511;</h1>
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="row justify-content-center align-items-center vh-100 feedback">
          <div className="col-md-8 col-lg-12">
            <div className="card my-4">
              <div className="row g-0">
                <div className="col-md-5 d-none d-md-block">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo"
                    className="img-fluid rounded-start"
                  />
                </div>
                <div className="col-md-7">
                  <div className="card-body text-black d-flex flex-column justify-content-center">
                    <h3 className="mb-5 text-uppercase fw-bold">
                      Student Report on Damaged Property Form
                    </h3>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label for="form1" className="form-label">
                            Email
                          </label>
                          <input
                            type="text"
                            name="email"
                            className="form-control form-control-lg"
                            id="form1"
                            placeholder="Enter Email"
                            onChange={onChangeHandler}
                            value={data.email}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="mb-4">
                          <label for="form2" className="form-label">
                            Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            className="form-control form-control-lg"
                            id="form2"
                            placeholder="Enter name"
                            onChange={onChangeHandler}
                            value={data.name}
                            required
                          />
                          <div class="invalid-feedback">Name should Be Valid</div>
                        </div>
                      </div>
                    </div>

                    {/* HallTicket Input Field */}
                    <div className="mb-4">
                      <label for="form3" className="form-label">
                        HallTicket Number
                      </label>
                      <input
                        type="text"
                        name="hallticket"
                        className={`form-control form-control-lg ${isHallticket ? 'valid' :''}`}
                        id="form3"
                        placeholder="Enter Hallticket number"
                        onChange={onChangeHandler}
                        value={data.hallticket}
                        required
                      />
                    </div>

                    {/* Gender Radio Buttons */}
                    <div className="d-md-flex justify-content-start align-items-center mb-4">
                      <h6 className="fw-bold mb-0 me-4">Gender: </h6>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio1"
                          value="female"
                          checked={data.gender === "female"}
                          onChange={onChangeHandler}
                          required
                        />
                        <label className="form-check-label" for="inlineRadio1">
                          Female
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio2"
                          value="male"
                          checked={data.gender === "male"}
                          onChange={onChangeHandler}

                          required
                        />
                        <label className="form-check-label" for="inlineRadio2">
                          Male
                        </label>
                      </div>
                      <div className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="gender"
                          id="inlineRadio3"
                          value="other"
                          checked={data.gender === "other"}
                          onChange={onChangeHandler}
                          required
                        />
                        <label className="form-check-label" for="inlineRadio3">
                          Other
                        </label>
                      </div>
                    </div>

                    {/* State and Floor & Classes Select Dropdowns */}
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
                            required
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
                            id="class"
                            className="form-select form-select-lg"
                            name="class"
                            value={data.class}
                            onChange={handleClassChange}
                            required
                          >
                            <option value="">Select Class</option>
                            {availableClasses.map((className, index) => (
                              <option key={index} value={className}>
                                {className}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Course Select */}
                    <div className="mb-4">
                      <label htmlFor="courseSelect" className="form-label">
                        Course
                      </label>
                      <select
                        id="course"
                        className="form-select form-select-lg"
                        name="course"
                        value={data.course}
                        onChange={handlecourseChange}
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="BTECH">BTECH</option>
                        <option value="MTECH">MTECH</option>
                      </select>
                    </div>

                    {/* Description Text Area */}
                    <div className="mb-4">
                      <label for="description" className="form-label">
                        Description
                      </label>
                      <textarea
                        className="form-control"
                        id="description"
                        rows="4"
                        name="description"
                        onChange={onChangeHandler}
                        value={data.description}
                        required
                      ></textarea>
                    </div>

                    {/* Image Upload */}
                    <div className="mb-4">
                      <label className="form-label">Upload Image
                        <img src={image?URL.createObjectURL(image):upload} alt="upload" style={{height:'90px',width:'140px'}} />
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        onChange={(e) => setImage(e.target.files[0])}
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg">
                      Submit Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Feedback;