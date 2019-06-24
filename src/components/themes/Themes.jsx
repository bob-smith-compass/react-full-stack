import React from "react";

export default function Themes() {
  return (
    <div>
      <div className="p-3 mb-2 bg-gradient-primary text-white">
        .bg-gradient-primary
      </div>
      <div className="p-3 mb-2 bg-gradient-secondary text-white">
        .bg-gradient-secondary
      </div>
      <div className="p-3 mb-2 bg-gradient-success text-white">
        .bg-gradient-success
      </div>
      <div className="p-3 mb-2 bg-gradient-danger text-white">
        .bg-gradient-danger
      </div>
      <div className="p-3 mb-2 bg-gradient-warning text-dark">
        .bg-gradient-warning
      </div>
      <div className="p-3 mb-2 bg-gradient-info text-white">.bg-gradient-info</div>
      <div className="p-3 mb-2 bg-gradient-light text-dark">.bg-gradient-light</div>
      <div className="p-3 mb-2 bg-gradient-dark text-white">.bg-gradient-dark</div>
    </div>
  );
}
