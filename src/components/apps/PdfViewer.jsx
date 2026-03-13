  "use client";
  import React from 'react';
  import { useOS } from "@/context/OSContext";

  const PdfViewer = ({ fileUrl }) => {
    const { isMobile } = useOS();
    const src = fileUrl || "/resume.pdf";

    // AGAR MOBILE HAI TOH IMAGE DIKHAO, DESKTOP HAI TOH IFRAME
    if (isMobile) {
      return (
        <div style={{ 
          width: '100%', 
          height: '100%', 
          background: '#121212', 
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '10px'
        }}>
          <img 
            src="/RESUME.jpg" // Apne resume ki image yahan daal
            alt="Resume" 
            style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
          />
          <a 
            href={src} 
            download 
            style={{
              marginTop: '20px',
              padding: '12px 24px',
              background: 'var(--primary-color)',
              color: '#000',
              borderRadius: '5px',
              fontWeight: 'bold',
              textDecoration: 'none'
            }}
          >
            Download PDF Version
          </a>
        </div>
      );
    }

    return (
      <div style={{ width: '100%', height: '100%', background: '#333' }}>
        <iframe 
          src={`${src}#view=FitH`}
          title="PDF Viewer"
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    );
  };

  export default PdfViewer;