import styled from "styled-components";

export default styled.a`
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  transition: 0.3s ease-out;
  &:hover {
    background-color: ${props => props.primary ? "white" : "palevioletred"};
    color: #ffffff;
    transition: 0.3s ease-in;
  }
`;
