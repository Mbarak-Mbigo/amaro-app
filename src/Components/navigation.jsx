import React from 'react';
import styled from 'styled-components';

import Button from './button';
import TextField from './text-field';

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

const openCart = () => {

}

const handleSearch = () => {
  
}

const Navigation = () => (
  <Container>
    <LinksWrapper>
    <Button onClick={openCart}>View Cart</Button>
    </LinksWrapper>
    <SearchInput onChange={handleSearch} name={'searchBox'} placeholder={'Search products'} />
  </Container>
)

export default Navigation;


