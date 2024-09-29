import React, { useState } from "react";
import Button from "./button";

function Product({ val, mover, count }) {
  const [bgColor, setBgColor] = useState(null); // Default background color
  const [showButtons, setShowButtons] = useState(false);

  return (
    <div
      className="w-full text-white "
      onMouseEnter={() => {
        mover(count);
        setBgColor("#0E0BE3");    
        setShowButtons(true);  // Show buttons on mouse enter

      }}
      onMouseLeave={() => {
        setBgColor("rgb(39 39 42)");
        setShowButtons(false);  // Hide buttons on mouse leave
      }}
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between h-[14rem]">
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10 text-medium tracking-wide">{val.description}</p>
          <div className="buttons flex gap-5">
          {showButtons && (
              <>
                {val.live && <Button title="Live Website" />}
                {val.case && <Button title="Case Study" />}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
