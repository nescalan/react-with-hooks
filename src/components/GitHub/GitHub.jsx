import React, { useEffect, useState } from "react";
import axios from "axios";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchItem, setSearchItem] = useState("");

  useEffect(() => {
    axios
      .get(`https://api.github.com/search/users?q=${searchItem}`)
      .then((res) => {
        setData(res.data.items);
      });
  }, []);

  console.log(data);

  return <div></div>;
}

export { GitHub };
