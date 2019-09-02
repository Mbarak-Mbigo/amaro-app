import styled from 'styled-components';

// import media from "../utils/media";
import {
  WHITE,
  DARK_BLUE,
  LIGHT_BLUE,
} from "../utils/colors.js";

const Button = styled.button`
    background-color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    border: 2px solid ${props => (props.inverted ? DARK_BLUE : "transparent")};
    color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
    font-size: 1rem;
    margin: 0 0.5rem;
    font-weight: 400;
    height: 2rem;
    line-height: 1;
    width: 10rem;
    opacity: 0.6;
    transition: 0.4s;
    outline: none;

    &: hover {
      background-color: ${props => (props.inverted ? DARK_BLUE : WHITE)};
      border: 1px solid ${LIGHT_BLUE};
      color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
      opacity: 1;
    }

    &: active {
      background-color: ${props => (props.inverted ? WHITE : DARK_BLUE)};
    }
`;

export default Button;
