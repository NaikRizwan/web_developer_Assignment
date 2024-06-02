// import React, { useState, useEffect } from "react";
// // import "./Teach.css";
// import myIcon from "../assets/img/Frame 35723.svg";
// import myIcon1 from "../assets/img/Frame 35709.svg";
// import { FaPlus } from "react-icons/fa";
// import pdfFile from "../assets/img/newone.pdf";
// import { FaFilePdf } from "react-icons/fa";
// import "./Slider.css";
// const Teach = () => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     const fetchContent = async () => {
//       try {
//         const response = await fetch("http://localhost:5001/api/getContent");
//         if (response.ok) {
//           const data = await response.json();
//           setContent(data.content);
//         } else {
//           console.error("Failed to fetch content:", response.statusText);
//         }
//       } catch (error) {
//         console.error("Failed to fetch content", error);
//       }
//     };

//     fetchContent();
//   }, []);

//   return (
//     <div className="flex-grow-1 p-3 content">
//       <div className="container-fluid">
//         <div className="d-flex justify-content-between align-items-center my-4">
//           <h2>Chapter Name</h2>
//         </div>
//         <div className="row" style={{ "--bs-gutter-x": "60px" }}>
//           <div className="col-md-6">
//             <div className=" mb-4">
//               {/* <div className="card-body"> */}
//               {/* <h5 className="card-title">Simulations</h5>
//             <p className="card-text">
//               Simulations are a powerful educational tool.
//             </p>
//             <a href="/AddContentModal" className="btn btn-primary">
//               View All
//             </a> */}
//               <img src={myIcon} alt="riz" />
//               {/* </div> */}
//             </div>
//           </div>
//           <div className="col-md-6">
//             <div className=" mb-4">
//               <img src={myIcon1} alt="riz" />
//             </div>
//           </div>
//         </div>

//         <div className="d-flex  mb-4">
//           <div className="card pdf-card">
//             <iframe
//               title="PDF Document 1"
//               src={pdfFile}
//               width="100%"
//               height="80%"
//             ></iframe>
//             <div className="card-body">
//               <FaFilePdf alt="PDF Icon" className="pdf-icon" />
//               <p className="file-name">abc.pdf</p>
//             </div>
//           </div>
//           <div className="card pdf-card">
//             <iframe
//               title="PDF Document 2"
//               src={pdfFile}
//               width="100%"
//               height="80%"
//             ></iframe>
//             <div className="card-body">
//               <FaFilePdf alt="PDF Icon" className="pdf-icon" />
//               <p className="file-name">abc.pdf</p>
//             </div>
//           </div>
//           <div className="card pdf-card">
//             <iframe
//               title="PDF Document 3"
//               src={pdfFile}
//               width="100%"
//               height="80%"
//             ></iframe>
//             <div className="card-body">
//               <FaFilePdf alt="PDF Icon" className="pdf-icon" />
//               <p className="file-name">abc.pdf</p>
//             </div>
//           </div>
//         </div>
//         <button className="add-content-button">
//           {" "}
//           <FaPlus className="me-2" />
//           Add Content
//         </button>
//         <div className="lorem-text">
//           <p>{content}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Teach;
import React, { useState, useEffect } from "react";
import myIcon from "../assets/img/Frame 35723.svg";
import myIcon1 from "../assets/img/Frame 35709.svg";
import { FaPlus } from "react-icons/fa";
import pdfFile from "../assets/img/newone.pdf";
import { FaFilePdf } from "react-icons/fa";
import "./Slider.css";

const Teach = () => {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await fetch("http://localhost:5001/api/getContent");
        if (response.ok) {
          const data = await response.json();
          setContents(data.contents);
        } else {
          console.error("Failed to fetch content:", response.statusText);
        }
      } catch (error) {
        console.error("Failed to fetch content", error);
      }
    };

    fetchContents();
  }, []);

  return (
    <div className="flex-grow-1 p-3 content">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center my-4">
          <h2>Chapter Name</h2>
        </div>
        <div className="row" style={{ "--bs-gutter-x": "60px" }}>
          <div className="col-md-6">
            <div className="mb-4">
              <img src={myIcon} alt="riz" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-4">
              <img src={myIcon1} alt="riz" />
            </div>
          </div>
        </div>

        <div className="d-flex mb-4">
          <div className="card pdf-card">
            <iframe
              title="PDF Document 1"
              src={pdfFile}
              width="100%"
              height="80%"
            ></iframe>
            <div className="card-body">
              <FaFilePdf alt="PDF Icon" className="pdf-icon" />
              <p className="file-name">abc.pdf</p>
            </div>
          </div>
          <div className="card pdf-card">
            <iframe
              title="PDF Document 2"
              src={pdfFile}
              width="100%"
              height="80%"
            ></iframe>
            <div className="card-body">
              <FaFilePdf alt="PDF Icon" className="pdf-icon" />
              <p className="file-name">abc.pdf</p>
            </div>
          </div>
          <div className="card pdf-card">
            <iframe
              title="PDF Document 3"
              src={pdfFile}
              width="100%"
              height="80%"
            ></iframe>
            <div className="card-body">
              <FaFilePdf alt="PDF Icon" className="pdf-icon" />
              <p className="file-name">abc.pdf</p>
            </div>
          </div>
        </div>
        <button className="add-content-button">
          <FaPlus className="me-2" />
          Add Content
        </button>
        <div className="lorem-text">
          {contents.map((contentItem, index) => (
            <p key={index}>{contentItem.content}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teach;
