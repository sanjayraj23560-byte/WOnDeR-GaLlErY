import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './Gallery';
import SplashScreen from './SplashScreen';

function App() {
  const [showGallery, setShowGallery] = useState(false);

  return (
    <>
      {!showGallery && <SplashScreen onDone={() => setShowGallery(true)} />}
      {showGallery && <Gallery />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);