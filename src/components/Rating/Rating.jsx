import React from "react";

// Icons: react-icons
import { IoIosStarOutline, IoIosStar } from "react-icons/io";

function Rating({ rating }) {
  return (
    <div>
      <h1>Rating: {rating} </h1>
      {rating >= 1 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 2 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 3 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 4 ? <IoIosStar /> : <IoIosStarOutline />}
      {rating >= 5 ? <IoIosStar /> : <IoIosStarOutline />}
    </div>
  );
}

export { Rating };
