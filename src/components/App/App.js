import React from "react";
import { JumbotronComponent } from "..";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <JumbotronComponent>
        <h1>
          Using a series of utilities, you can create this jumbotron, just like
          the one in previous versions of Bootstrap. Check out the examples
          below for how you can remix and restyle it to your liking.
        </h1>
      </JumbotronComponent>
    </div>
  );
}

export { App };
