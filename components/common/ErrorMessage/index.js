import styled from "styled-components";

export default styled.small`
  color: red;
  display: ${props => props.hidden ? "none" : "block"};;
`;
