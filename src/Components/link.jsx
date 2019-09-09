import { Link } from "react-router-dom";
import styled from "styled-components";
import { WHITE, DARK_BLUE, LIGHT_BLUE } from "../utils/colors.js";

const LinkButton = styled(Link)`
  min-width: 6rem;
  background-color: ${WHITE};
  color: ${DARK_BLUE};
  margin-right: 0.5rem;
  text-align: center;
  line-height: 1;
  padding: 0.5rem 1rem;

  &: hover {
    background-color: ${LIGHT_BLUE};
    color: ${WHITE};
  }

  &: active {
    background-color: ${LIGHT_BLUE};
  }
`;

export default LinkButton;
