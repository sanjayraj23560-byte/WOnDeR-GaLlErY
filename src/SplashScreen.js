import React, { useState, useEffect } from 'react';

function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fade out at 1.2s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    // Fully remove at 1.7s (after fade animation completes)
    const removeTimer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash ${fadeOut ? 'splash-hide' : ''}`}>
      <div className="splash-content">
        <span className="splash-icon">🐦‍🔥</span>
        <h1 className="splash-title">Wonder World</h1>
        <p className="splash-sub">Gallery</p>
      </div>
    </div>
  );
}

export default SplashScreen;