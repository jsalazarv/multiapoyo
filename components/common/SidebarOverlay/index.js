import styled from "styled-components";

export default styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.4);
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  z-index: 1;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
