import React, { useState } from "react";
import "./style.css";

function StatusToggler() {
  const [isOffline, setIsOffline] = useState(false);

  const clickHandler = () => {
    setIsOffline(!isOffline);
  };

  return (
    <div
      className={`toggler-wrapper ${isOffline ? "offline" : ""}`}
      onClick={clickHandler}
    >
      <div className="toggler-indicator"></div>
    </div>
  );
}

export default StatusToggler;
