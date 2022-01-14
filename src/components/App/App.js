import React from "react";
import { JumbotronComponent } from "..";

// Styles
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { GitHub } from "..";

function App() {
  return (
    <div className="App">
      <GitHub />
      {/* <UserForm /> */}
      {/* <Products /> */}
    </div>
  );
}

export { App };
