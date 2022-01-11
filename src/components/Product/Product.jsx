import React from "react";
import { Rating } from "..";
import { Card, Button } from "react-bootstrap";

function Product(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.data.imageUrl} alt="Image" />
      <Card.Body>
        <Card.Title>{props.data.productName}</Card.Title>
        <Card.Subtitle>{props.data.releasedDate}</Card.Subtitle>
        <Card.Text>
          <Rating
            rating={props.data.rating}
            numOfReviews={props.data.numOfReviews}
          />
          <p>{props.data.description}</p>
        </Card.Text>
        <Button variant="primary">Adopt </Button>
      </Card.Body>
    </Card>
  );
}

export { Product };
