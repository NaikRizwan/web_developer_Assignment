import React from "react";

import AddContentModal from "./AddContentModal";
import myIcon from "../assets/img/Frame 35723.svg";
import myIcon1 from "../assets/img/Frame 35709.svg";
import myIcon2 from "../assets/img/Group.svg";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h2>Chapter Name</h2>
      </div>
      <div className="row" style={{ "--bs-gutter-x": "40px" }}>
        <div className="col-md-6">
          <div className=" mb-4">
            {/* <div className="card-body"> */}
            {/* <h5 className="card-title">Simulations</h5>
              <p className="card-text">
                Simulations are a powerful educational tool.
              </p>
              <a href="/AddContentModal" className="btn btn-primary">
                View All
              </a> */}
            <img src={myIcon} alt="riz" />
            {/* </div> */}
          </div>
        </div>
        <div className="col-md-6">
          <div className=" mb-4">
            <img src={myIcon1} alt="riz" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center align-items-center ">
        <div class="text-center">
          <img src={myIcon2} alt="riz" class="mb-4" />
          <p>Content not added yet!</p>
          <AddContentModal />
          {/* <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addContentModal"
          >
            <FaPlus className="me-2" />
            Add Content
          </button> */}
        </div>
      </div>

      {/* <AddContentModal /> */}
    </div>
  );
};

export default Dashboard;
