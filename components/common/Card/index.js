import styled from "styled-components";

export default styled.div`
  @media only screen and (min-width : 320px) {
    align-items: center;
    background-color: #ffffff;
    border-radius: ${props => props.rounded ? "15px" : "0"};
    border: 1px solid rgba(0,0,0,.125);
    display: flex;
    flex-direction: column;
    padding: 40px 10px;
    position: relative;
    text-align: center;
    width: 100%;
    ${props => props.maxWidthXs ? `max-width: ${props.maxWidthXs}` : null};
    margin-bottom: ${props => props.mb ? `${props.mb}` : "10px"};
    margin-top: ${props => props.mt ? `${props.mt}` : "10px"};
    margin-left: ${props => props.ml ? `${props.ml}` : "0"};
    margin-right: ${props => props.mr ? `${props.mr}` : "0"};
  }

  @media only screen and (min-width : 768px) {
    display: inline-flex;
    ${props => props.maxWidthSm ? `max-width: ${props.maxWidthSm}` : null};
    margin-bottom: ${props => props.mb ? `${props.mb}` : "10px"};
    margin-top: ${props => props.mt ? `${props.mt}` : "10px"};
    margin-left: ${props => props.ml ? `${props.ml}` : "10px"};
    margin-right: ${props => props.mr ? `${props.mr}` : "10px"};
  }

  @media only screen and (min-width : 992px) {
    display: flex;
    flex-direction: column;
    width: ${props => props.dense ? "10rem" : "25rem"};
    transition: 0.3s ease-out;
    ${props => props.maxWidthMd ? `max-width: ${props.maxWidthMd}` : null};
    margin-bottom: ${props => props.mb ? `${props.mb}` : "0"};
    margin-top: ${props => props.mt ? `${props.mt}` : "0"};
    margin-left: ${props => props.ml ? `${props.ml}` : "5px"};
    margin-right: ${props => props.mr ? `${props.mr}` : "5px"};
    
    &:hover {
      box-shadow: -2px 8px 20px -12px rgba(0,0,0,0.75);
      transition: 0.3s ease-in;
    }
  }
`;
