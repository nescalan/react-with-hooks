import React from "react";
import { Products } from "..";
import { Button } from "react-bootstrap";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <Products />
      <Button variant="danger">Default Button</Button>
    </div>
  );
}

export { App };
