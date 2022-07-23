import styled from "styled-components";

export default styled.div`
  @media only screen and (min-width : 320px) {
    display: grid;
    grid-template-columns: repeat(1,4fr);
    margin-bottom: ${props => props.mb ? `${props.mb}` : "0"};
    margin-top: ${props => props.mt ? `${props.mt}` : "0"};
    margin-left: ${props => props.ml ? `${props.ml}` : "0"};
    margin-right: ${props => props.mr ? `${props.mr}` : "0"};
  }

  @media only screen and (min-width : 768px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
  }
  
  @media only screen and (min-width : 992px) {
    display: grid;
    grid-template-columns: repeat(3,1fr);
  }

  @media only screen and (min-width : 1200px) {
    display: grid;
    grid-template-columns: repeat(4,1fr);
  }
`;
