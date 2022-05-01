import styled from "styled-components";

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 35px auto;
  border: 2px solid #333;
  border-radius: 10px;
  border-bottom: 5px solid #333;

  h2 {
    font-size: 2rem;
    border-bottom: 2px dashed #333;
    margin-bottom: 30px;
    color: #ff1493;

    span {
      display: inline-block;
      font-size: 4rem;
    }
  }

  input {
    width: 100%;
    padding: 15px;
    margin-bottom: 25px;
    border-radius: 5px;
    border: 1px solid #333;
  }

  button {
    border: none;
    border-radius: 10px;
    border-bottom: 4px solid #999;
    background: #ff1493;
    color: #fafafa;
    padding: 10px 40px;
    font-size: 1.3rem;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  p {
    font-size: 1.2rem;

    a {
      color: #ff1493;
      font-weight: 700;
    }
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
