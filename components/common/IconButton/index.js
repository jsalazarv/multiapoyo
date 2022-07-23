import styled from "styled-components";

export default styled.button`
  background-color: ${props => props.background ? props.background : "palevioletred"};
  color: ${props => props.color ? props.color : "white"};
  font-size: ${props => props.fontSize ? props.fontSize : "1em"};;
  padding: 10px;
  border: 2px solid ${props => props.background ? props.background : "white"};
  border-radius: 50%;
  width: ${props => props.size ? props.size : "40px"};
  height: ${props => props.size ? props.size : "40px"};
  transition: 0.3s ease-out;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${props => props.mb ? `${props.mb}` : "10px"};
  margin-top: ${props => props.mt ? `${props.mt}` : "10px"};
  margin-left: ${props => props.ml ? `${props.ml}` : "0"};
  margin-right: ${props => props.mr ? `${props.mr}` : "0"};
  &:hover {
    color: #ffffff;
    transition: 0.3s ease-in;
    opacity: 0.8;
  }
`;
