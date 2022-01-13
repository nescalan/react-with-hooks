import React from "react";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Products, UserForm } from "..";

function App() {
  return (
    <div className="App">
      <UserForm />
      {/* <Products /> */}
    </div>
  );
}

export { App };
