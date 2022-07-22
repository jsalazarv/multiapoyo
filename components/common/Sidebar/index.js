import styled from "styled-components";

export default styled.div`
  width: 280px;
  min-height: 100vh;
  box-shadow: -2px 8px 20px -12px rgba(0,0,0,0.75);
  background-color: #fff;
  position: fixed;
  top: 0;
  right: -100%;
  z-index: 2;
  transition: 0.5s;
  &.active {
    right: 0;
  }
`;
