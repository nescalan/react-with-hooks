import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

function GitHub() {
  const [searchItem, setSearchItem] = useState("greg");
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchItem}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
  }, []);

  console.log(data);
  return (
    <div>
      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
}

export { GitHub };
