import React, { useState, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './Gallery';
import SplashScreen from './SplashScreen';

function App() {
  const [showGallery, setShowGallery] = useState(false);

  // ✅ useCallback prevents onDone from being a new function on every render
  const handleDone = useCallback(() => {
    setShowGallery(true);
  }, []);

  return (
    <>
      {!showGallery && <SplashScreen onDone={handleDone} />}
      {showGallery && <Gallery />}
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);