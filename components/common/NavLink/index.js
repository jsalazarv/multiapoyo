import styled from "styled-components";

export default styled.a`
  color: ${props => props.primary ? "white" : "#02BDC1"};
  font-size: 1em;
  padding: 0.25em 1em;
  transition: 0.3s ease-out;
  &:hover {
    transition: 0.2s ease-in;
    border-bottom: solid 2px #02BDC1;
  }
`;
