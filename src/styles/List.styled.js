import styled from "styled-components";

export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormStyle = styled.form`
  width: 100%;
  max-width: 1200px;

  div {
    width: 100%;
    border: 2px solid #333;
    border-bottom: 5px solid #333;
    border-radius: 10px;
    margin-bottom: 20px;

    &:focus,
    &:active,
    &:hover {
      border: 2px solid #65b867;
      border-bottom: 5px solid #65b867;
    }
  }

  input {
    width: 98%;
    border: none;
    padding: 15px 10px;
    position: relative;
    border-radius: 10px;
    outline: none;
    /* border-radius: 10px; */
    font-size: 1rem;
  }

  button {
    border: none;
    background-color: transparent;
    position: absolute;
    top: 90px;
    left: 78%;
    cursor: pointer;
  }
`;

export const TodoWrapper = styled.section`
  width: 100%;
  font-size: 1.2rem;
  ul {
    list-style: none;
    padding-left: 0px;
  }
`;

export const TodoListFlex = styled.li`
  border: 2px solid #333;
  border-bottom: 5px solid #333;
  padding: 10px 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    gap: 10px;

    button {
      background-color: #fff;
      border: none;
    }
  }
`;
