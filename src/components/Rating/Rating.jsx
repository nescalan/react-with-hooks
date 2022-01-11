import React from "react";
import { useState } from "react";

// Icons: react-icons
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

function Rating(props) {
  const [rating, setRating] = useState(props.rating);
  const styles = {
    starStyles: {
      color: "orange",
    },
  };

  return (
    <div style={styles.starStyles}>
      {rating >= 1 ? (
        <IoIosStar onClick={() => setRating(1)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(1)} />
      )}
      {rating >= 2 ? (
        <IoIosStar onClick={() => setRating(2)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(2)} />
      )}
      {rating >= 3 ? (
        <IoIosStar onClick={() => setRating(3)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(3)} />
      )}
      {rating >= 4 ? (
        <IoIosStar onClick={() => setRating(4)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(4)} />
      )}
      {rating >= 5 ? (
        <IoIosStar onClick={() => setRating(5)} />
      ) : (
        <IoIosStarOutline onClick={() => setRating(5)} />
      )}{" "}
      {props.numOfReviews}
    </div>
  );
}

export { Rating };
