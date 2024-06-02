import React, { useState, useEffect } from "react";
import {
  FaTachometerAlt,
  FaChalkboardTeacher,
  FaFileAlt,
  FaVideo,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Slider.css";
import profileImage from "../assets/img/rr.png"; // Update the path to your profile image

const Sidebar = () => {
  const [schoolName, setSchoolName] = useState("");

  useEffect(() => {
    const fetchSchoolName = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/getSchool");
        if (response.ok) {
          const data = await response.json();
          setSchoolName(data.name);
        } else {
          console.error("Failed to fetch school name:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch school name", error);
      }
    };

    fetchSchoolName();
  }, []);

  return (
    <div className="sidebar d-flex flex-column p-3 bg-light">
      <h5 className="my-3">{schoolName}</h5>
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <NavLink to="/" exact className="nav-link" activeClassName="active">
            <FaTachometerAlt className="me-2" />
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to="/Teach" className="nav-link" activeClassName="active">
            <FaChalkboardTeacher className="me-2" />
            Teach
          </NavLink>
        </li>
        <li>
          <NavLink to="/test" className="nav-link" activeClassName="active">
            <FaFileAlt className="me-2" />
            Test
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/video-library"
            className="nav-link"
            activeClassName="active"
          >
            <FaVideo className="me-2" />
            Video Library
          </NavLink>
        </li>
        <li>
          <NavLink to="/doubts" className="nav-link" activeClassName="active">
            <FaQuestionCircle className="me-2" />
            Doubts
          </NavLink>
        </li>
      </ul>
      <hr />
      <NavLink to="/profile" className="nav-link" activeClassName="active">
        <div className="profile">
          <img src={profileImage} alt="Profile" />
        </div>
      </NavLink>
    </div>
  );
};

export default Sidebar;
