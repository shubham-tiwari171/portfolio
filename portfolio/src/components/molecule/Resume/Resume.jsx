import React, { useState } from "react";
// import { Document, pdfjs, Page } from "react-pdf";
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
// import resumePDF from "./Resume_Shubham_tiwari.pdf";
import "./Resume.css";
const Resume = () => {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <>
      {/* {" "}
      <Document
        file={resumePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      ></Document>
      <p>
        Page {pageNumber} of {numPages}
      </p> */}
      <div className="myCustomClass">
        <iframe
          loading="lazy"
          className="myIframeCustomClass"
          src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFn5vJcpi4&#x2F;view?embed"
        ></iframe>
      </div>
    </>
  );
};

export default Resume;
