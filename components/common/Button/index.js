import styled from "styled-components";

export default styled.button`
  background-color: ${props => props.background ? props.background : "palevioletred"};
  color: ${props => props.color ? props.color : "white"};
  font-size: 1em;
  padding: 10px;
  margin: 10px 0;
  border: 2px solid ${props => props.background ? props.background : "white"};
  border-radius: 3px;
  width: 100%;
  transition: 0.3s ease-out;
  text-transform: uppercase;

  &:hover {
    color: #ffffff;
    transition: 0.3s ease-in;
    opacity: 0.8;
  }
`;
