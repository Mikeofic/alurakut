import styled from 'styled-components';

const Box = styled.div`
  margin-bottom: 10px;
  padding: 14px;
  background-color: #181726;
  border-radius: 8px;
  
  .boxLink {
    font-size: 14px;
    font-weight:800;
    text-decoration: none;
    color: #2e7bb4;
  }

  .title {
    margin: 20px;
    font-size: 32px;
    font-weight: 500;
    color: #ecf2fa;
  }

  .subTitle {
    margin: 20px;
    font-size: 18px;
    font-weight: 400;
    
  }

  .smallTitle {
    margin: 20px;
    font-size: 16px;
    font-weight: 700;
    color: #ecf2fa;
  }

  hr {
    margin-top: 15px;
    margin-bottom: 10px;
    border-color: transparent;
    border-bottom-color: #ecf2fa; 
    
  }

  input {
    width: 100%;
    margin-bottom: 15px;
    padding: 15px;
    color: #BF05F2;
    background-color: #202840;
    border: 0;
    border-radius: 10000px;
    ::placeholder {
      color: #ABB4BD;
      opacity: 1;
    }
  }

  button {
    padding: 8px 12px;
    color: #ffffff;
    background-color: #BF05F2 ;
    border: 0;
    border-radius: 10000px;
    font-size: bold;
  }
`;

export default Box;