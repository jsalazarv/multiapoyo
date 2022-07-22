import styled from "styled-components";

export default styled.button`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-size: 1em;
  margin: 5px 0;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  width: 100%;
  transition: 0.3s ease-out;

  &:hover {
    background-color: ${props => props.primary ? "white" : "palevioletred"};
    color: #ffffff;
    transition: 0.3s ease-in;
  }
`;
