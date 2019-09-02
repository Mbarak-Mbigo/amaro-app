import React from "react";
import styled from "styled-components";

import { SILVER_GREY } from "../utils/colors.js";

const TextInput = styled.input`
  box-sizing: border-box;
  border: 1px solid ${SILVER_GREY};
  font-size: 1.8rem;
  font-family: "Helvetica", "Arial", sans-serif;
  font-weight: 300;
  outline: none;
  padding: 0.5rem 1rem;
`;

const TextField = ({ name, placeholder, ...restProps }) => (
  <TextInput name={name} placeholder={placeholder} {...restProps} />
);

export default TextField;
