import React from "react";
import "./style.css";

function NotFound() {
  return (
    <div className="NotFound">
      <div>
        <h1 className="title">404</h1>
        <h2>It's Not the real 404 but it IS not found</h2>
        <li>This means that you are not authorized to get here!</li>
        <li>Or you are not logged in</li>
      </div>
    </div>
  );
}
export default NotFound;
