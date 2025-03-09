'use client';

import React from "react";

const Home = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold text-center mb-6">Analysis Dashboard</h1>
      
      {/* Google Looker Studio Embed */}
      <div className="bg-white p-4 rounded-2xl shadow-xl mb-12 w-full max-w-6xl" style={{ height: '80vh' }}>
        <h2 className="text-xl font-semibold mb-3 text-center">Google Looker Studio</h2>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://lookerstudio.google.com/embed/reporting/82a83ecc-ccd6-414c-9c80-1db96eaf7dd9/page/Qvj4E" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen 
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          className="w-full rounded-lg"
        ></iframe>
      </div>

      {/* Streamlit App Embed */}
      <div className="bg-white p-4 rounded-2xl shadow-xl w-full max-w-6xl" style={{ height: '80vh' }}>
        <h2 className="text-xl font-semibold mb-3 text-center">Streamlit App</h2>
        <iframe 
          width="100%" 
          height="100%" 
          src="https://crash-data-analysis-app-hseoyr4ynb7ztxej4hp5u.streamlit.app/?embed=true" 
          frameBorder="0" 
          style={{ border: 0 }} 
          allowFullScreen 
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
          className="w-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default Home;
