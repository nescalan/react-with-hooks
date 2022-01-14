import React from "react";
import { Product } from "..";

function Products() {
  const getProducts = () => {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: "May 31, 2016",
        description: "Gatitos muy bonitos para regalar",
        rating: 4,
        numOfReviews: 2,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: "October 31, 2016",
        description:
          "Jorge nos donó este felino, el cual tiene como nombre Jumas",
        rating: 2,
        numOfReviews: 12,
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: "July 30, 2016",
        description:
          "Se busca hogar para este pequeño minino, es muy agradable y amigable.",
        rating: 5,
        numOfReviews: 2,
      },
    ];
  };

  const products = getProducts();

  const listProducts = products.map((product) => (
    <Product key={product.productName} data={product} />
  ));

  return (
    <div>
      {listProducts.length > 0 ? (
        <ul>{listProducts}</ul>
      ) : (
        <ul>No Products to Display</ul>
      )}
    </div>
  );
}

export { Products };
