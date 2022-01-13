import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Spinner } from "react-bootstrap";

function GitHub() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nescalan");
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    const res = await axios
      .get(`https://api.github.com/search/users?q=${searchTerm}`)
      .then((res) => {
        setData(res.data.items);
        setIsLoading(false);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    getData();
  };

  const listUsers = data.map((user) => (
    <Card key={user.id} style={{ width: "18rem" }}>
      <Card.Img variant="top" src={user.avatar_url} />
      <Card.Body>
        <Card.Title>User: {user.login}</Card.Title>
        <Card.Subtitle>Id: {user.id} </Card.Subtitle>
      </Card.Body>
    </Card>
  ));

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button type="submit">Search...</button>
      </form>
      <br />
      <h1>GitHub Users Results</h1>
      <hr />

      {isLoading && (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {listUsers}
    </>
  );
}

export { GitHub };
