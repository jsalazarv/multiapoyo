import styled from "styled-components";

export default styled.div`
  background-color: #E6EAF2;
  ${props => props.url ? `background-image: url("${props.url}")` : null};
  background-size: cover;
  border-radius: 50%;
  height: ${props => props.size || 50}px;
  width: ${props => props.size || 50}px;
`;
