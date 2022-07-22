import styled from "styled-components";

export default styled.h1`
  font-size:  ${props => props.fontSize ? props.fontSize : "1.5rem"};
  padding:  ${props => props.padding ? props.padding : "0"};
  padding-left:  ${props => props.pl ? props.pl : "0"};
  padding-right:  ${props => props.pr ? props.pr : "0"};
  padding-top:  ${props => props.pt ? props.pt : "0"};
  padding-bottom:  ${props => props.pb ? props.pb : "0"};
  text-align: center;
  color: #5F6265;
`;
