import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 16rem;
`;

const Image = styled.img`
  width: 14rem;
  height: 14rem;
`;

const Title = styled.p`
  display: flex;
  align-items: flex-end;
  margin-bottom: 0.5rem;
  height: 2rem;
`;

const SizeTable = styled.table`
  width: 14rem;
`;

const Th = styled.th`
  text-align: left;
`;

const TB = styled.tbody``;

const TR = styled.tr``;

const TD = styled.td``;

const Size = ({ sku, size, available, handleAddToCart }) => (
  <TB>
    <TR>
      <TD>{size}</TD>
      <TD>{available ? "Available" : "Out of Stock"}</TD>
      {!!available && (
        <TD>
          <button onClick={handleAddToCart(sku)}>Add to Cart</button>
        </TD>
      )}
    </TR>
  </TB>
);

const Sizes = ({ sizeList, handleAddToCart }) => (
  <React.Fragment>
    <SizeTable>
      <TR>
        <Th>Size</Th>
        <Th>Availability</Th>
      </TR>
      {sizeList.map((sizeData, index) => (
        <Size key={index} {...sizeData} handleAddToCart={handleAddToCart} />
      ))}
    </SizeTable>
  </React.Fragment>
);

const Item = ({ name, image, sizes }) => {
  const handleAddToCart = sku => () => {
    console.log("Add Item to cart", sku);
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Image
        src={image ? image : require("../images/image-not-available.jpg")}
      ></Image>
      <Sizes sizeList={sizes} handleAddToCart={handleAddToCart} />
    </Container>
  );
};

export default Item;
