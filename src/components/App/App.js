import React from "react";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import { Rating } from "..";

function App() {
  return (
    <div>
      <Rating rating="1" />
      <Rating rating="2" />
      <Rating rating="3" />
      <Rating rating="4" />
      <Rating rating="5" />
    </div>
  );
}

export { App };
