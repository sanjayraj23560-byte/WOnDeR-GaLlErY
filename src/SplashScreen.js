import React, { useState, useEffect } from 'react';

function SplashScreen({ onDone }) {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    const removeTimer = setTimeout(() => {
      setVisible(false);
      onDone();
    }, 1700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, [onDone]);   // ✅ FIX — added onDone here

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