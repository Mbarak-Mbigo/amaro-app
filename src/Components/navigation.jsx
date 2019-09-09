import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import LinkButton from "./link";

import TextField from "./text-field";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: flex 1;
`;

const SearchInput = styled(TextField)`
  width: 10rem;
  height: 2rem;
  font-size: 1rem;
`;

const handleSearch = () => {};

const totalQuantity = selectedItems =>
  selectedItems.reduce((acc, item) => acc + item.quantity, 0);

const Navigation = () => {
  const { selected } = useSelector(state => state.cart);

  return (
    <Container>
      <LinksWrapper>
        <LinkButton to={"/cart"}>View Cart</LinkButton>
        <LinkButton to={"/cart"}>
          {`Selected Items: ${totalQuantity(selected)}`}
        </LinkButton>
      </LinksWrapper>
      <SearchInput
        onChange={handleSearch}
        name={"searchBox"}
        placeholder={"Search products"}
      />
    </Container>
  );
};

export default Navigation;
