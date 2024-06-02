import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import myIcon3 from "../assets/img/text.svg";
import myIcon4 from "../assets/img/Group 40474.png";

const AddContentModal = () => {
  const [show, setShow] = useState(false);
  const [contentType, setContentType] = useState("");
  const [textContent, setTextContent] = useState("");

  const handleClose = () => {
    setShow(false);
    setContentType("");
    setTextContent("");
  };

  const handleShow = () => setShow(true);

  const handleContentTypeChange = (type) => {
    setContentType(type);
  };

  const handleTextContentChange = (e) => {
    setTextContent(e.target.value);
  };

  const handleSubmit = async () => {
    const response = await fetch(
      "https://web-developer-assignment-tut8.vercel.app/api/addContent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: textContent }),
      }
    );

    if (response.ok) {
      alert("Content added successfully");
      setTextContent("");
      handleClose();
    } else {
      alert("Failed to add content");
    }
  };

  return (
    <>
      <button className="btn btn-primary" onClick={handleShow}>
        <FaPlus className="me-2" />
        Add Content
      </button>

      {show && (
        <div className="modal show d-block" tabIndex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add Content</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleClose}
                ></button>
              </div>
              <div className="modal-body">
                {!contentType && (
                  <div className="d-flex justify-content-around">
                    <div
                      className="card"
                      onClick={() => handleContentTypeChange("text")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-body text-center">
                        <img src={myIcon3} alt="riz" />
                        <h5 className="card-title">Add Text Content</h5>
                      </div>
                    </div>
                    <div
                      className="card"
                      onClick={() => handleContentTypeChange("pdf")}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="card-body text-center">
                        <img src={myIcon4} alt="riz" />
                        <h5 className="card-title">Add PDF Content</h5>
                      </div>
                    </div>
                  </div>
                )}
                {contentType === "text" && (
                  <form>
                    <div className="mb-3">
                      <label htmlFor="formTextContent" className="form-label">
                        Text Content
                      </label>
                      <textarea
                        className="form-control"
                        id="formTextContent"
                        rows="3"
                        value={textContent}
                        onChange={handleTextContentChange}
                      ></textarea>
                    </div>
                  </form>
                )}
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Cancel
                </button>
                {contentType === "text" && (
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handleSubmit}
                  >
                    Add Content
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddContentModal;
