import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 83vh;
`;

const Cart = () => {
  const { selected } = useSelector(state => state.cart);
  const handleCheckout = () => {
    // handle checkout logic
  };

  return (
    <Container>
      {!!selected.length ? "Show Selected Items" : "Select Items from Catalog"}{" "}
      <br />
      {!!selected.length ? "Cost: value" : "Cost: 0"} <br />
      <button onClick={handleCheckout}>Checkout</button> <br />
      <Link to={"/"}>Back To Catalog</Link>
    </Container>
  );
};

export default Cart;
