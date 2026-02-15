import React from 'react';

const PdfViewer = ({ fileUrl }) => {
  const src = fileUrl || ""; 

  if (!src) return <div style={{color:'white', padding:20}}>No File Found</div>;

  return (
    <div style={{ width: '100%', height: '100%', background: '#333' }}>
      <iframe 
        // Yahan se '#toolbar=0' hata diya hai taaki INBUILT options dikhein
        src={src} 
        title="PDF Viewer"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
};

export default PdfViewer;