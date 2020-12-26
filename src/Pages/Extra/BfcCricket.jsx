import React, { useState } from 'react';
import './BfcCric.css';
import { Document, Page,pdfjs } from 'react-pdf';
import { Helmet } from 'react-helmet';
import Cricket from './Cricket.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
const BfcCricket =()=>{
    const [numPages, setNumPages] = useState(null);
    const [pageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }
    return(
      <div>
          <Helmet>
              <title>BFC | Cricket Tournament Information 2020</title>
          </Helmet>
          <Document 
           onLoadSuccess={onDocumentLoadSuccess}
           file={Cricket}
           className="xxxx"
           >
              <Page pageNumber={pageNumber} className="bfc-cric-info" />
          </Document>
          <p>Page {pageNumber} of {numPages}</p>
      </div>
    )
}

export default BfcCricket;