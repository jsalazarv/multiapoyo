import styled from "styled-components";

export default styled.div`
  @media only screen and (min-width : 320px) {
    align-items: center;
    background-color: #ffffff;
    border-radius: 15px;
    border: 1px solid rgba(0,0,0,.125);
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 40px 10px;
    position: relative;
    text-align: center;
    width: 100%;
  }

  @media only screen and (min-width : 768px) {
    width: 47%;
    display: inline-flex;
    margin: 10px;
  }

  @media only screen and (min-width : 992px) {
    display: flex;
    flex-direction: column;
    margin: 0 5px;
    width: 18rem;
    transition: 0.3s ease-out;
    
    &:hover {
      box-shadow: -2px 8px 20px -12px rgba(0,0,0,0.75);
      transition: 0.3s ease-in;
    }
  }
`;
