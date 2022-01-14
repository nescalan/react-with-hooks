import React from "react";

function JumbotronComponent(props) {
  return (
    <div class="container-fluid bg-light text-dark p-5">
      <div class="container bg-light p-5">
        <h1 class="display-4 fw-bold">Hello, world!</h1>
        <hr />
        <p> {props.children} </p>
        <a href="#" class="btn btn-primary">
          Learn more
        </a>
      </div>
    </div>
  );
}

export { JumbotronComponent };
