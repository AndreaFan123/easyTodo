import styled from "styled-components";

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 20px auto;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  position: relative;

  input {
    width: 100%;
    max-width: 500px;
    padding: 15px 10px;
    font-size: 1.2rem;
    border: 2.2px solid #333;
    border-right: none;
    /* border-bottom: 4px solid #333; */
    border-radius: 10px 0 0 10px;
  }

  button {
    padding: 7.5px 10px;
    width: 70px;
    color: white;
    background: deeppink;
    border: 2.2px solid #333;
    border-left: none;
    border-radius: 0 10px 10px 0;
    outline: none;
    font-size: 2rem;
    cursor: pointer;

    &:hover {
      transition: all 0.5s ease-in-out;
      background: #65b867;
    }
  }
`;
