import React, { useState, useEffect } from 'react';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const moveCursor = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      document.addEventListener('mousemove', moveCursor);
  
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }, []);

  return (
    <div
      id="crsr"
      className="fixed h-[2.5vh] w-[2.5vh] rounded-full bg-white z-[9999] mix-blend-difference pointer-events-none"
      style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
    ></div>
  );


}

export default Cursor
