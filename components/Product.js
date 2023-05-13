import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();

  const { data: prod } = useSelector((state) => state.products);
  useEffect(() => {
    // apui
    // fetch("https://fakestoreapi.com/products")
    dispatch(getProducts());
    //   .then((data) => data.json())
    //   .then((result) => setProducts(result));
  });

  const addToCart = (product) => {
    //dispatch an action add
    dispatch(add(product));
  };

  const cards = prod.map((product) => (
    <div className="col-md-3" style={{ marginBottom: "10px" }}>
      <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>INR:{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{ backgroundColor: "white" }}>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div>
      <h1>Product dashboard</h1>
      <div className="row">{cards}</div>
      {JSON.stringify(prod)}
    </div>
  );
};

export default Product;
