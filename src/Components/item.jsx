import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { addItemToCart } from "../app/cart/action";

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

const Label = styled.label`
  display: block;
`;

const Size = ({ sku, size, available, onSale, handleAddToCart }) => (
  <TB>
    <TR>
      <TD>{size}</TD>
      <TD>{available ? "Available" : "Out of Stock"}</TD>
      {!!available && (
        <TD>
          <button disabled={!onSale} onClick={handleAddToCart(sku)}>
            Add to Cart
          </button>
        </TD>
      )}
    </TR>
  </TB>
);

const Sizes = ({ sizeList, onSale, handleAddToCart }) => (
  <React.Fragment>
    <SizeTable>
      <TR>
        <Th>Size</Th>
        <Th>Availability</Th>
      </TR>
      {sizeList.map((sizeData, index) => (
        <Size
          key={index}
          {...sizeData}
          handleAddToCart={handleAddToCart}
          onSale={onSale}
        />
      ))}
    </SizeTable>
  </React.Fragment>
);

const Item = ({
  name,
  image,
  regular_price,
  actual_price,
  discount_percentage,
  on_sale,
  sizes
}) => {
  const dispatch = useDispatch();
  const { data } = useSelector(state => state.products);

  const handleAddToCart = sku => () => {
    const {
      name,
      image,
      regular_price,
      actual_price,
      discount_percentage
    } = data.find(item => item.sizes.find(size => size.sku === sku));

    dispatch(
      addItemToCart({
        sku,
        name,
        image,
        price: !!discount_percentage ? actual_price : regular_price,
        quantity: 1
      })
    );
  };

  return (
    <Container>
      <Title>{name}</Title>
      <Image
        src={image ? image : require("../images/image-not-available.jpg")}
      ></Image>
      {<Label>Promotion: {!!discount_percentage ? "On" : "Off"}</Label>}
      {<Label>On Sale: {on_sale ? "Yes" : "No"}</Label>}
      <Label>Regular. Price: {regular_price}</Label>
      {!!discount_percentage && <Label>Actual. Price: {actual_price}</Label>}
      {!!discount_percentage && (
        <Label>Discount: {`${discount_percentage} off`}</Label>
      )}
      <Sizes
        sizeList={sizes}
        handleAddToCart={handleAddToCart}
        onSale={on_sale}
      />
    </Container>
  );
};

export default Item;
