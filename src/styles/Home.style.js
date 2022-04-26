import styled from "styled-components";

export const AddTodoWrapper = styled.section`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  padding: 0 20px;
`;

export const AddTodoStyle = styled.div`
  font-size: 1.3rem;
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #333;
  border-bottom: 5px solid #333;
  border-radius: 10px;
  padding: 15px 15px;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #538ff7;
    font-weight: 600;
  }
`;
