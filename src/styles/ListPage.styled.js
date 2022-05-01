import styled from "styled-components";

export const AddTodoWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #ff1493;
    font-size: 1.5rem;
    margin-top: 20px;
  }

  a {
    text-decoration: none;
    font-size: 1.2rem;
    background: #ff1493;
    border-radius: 10px;
    border-bottom: 4px solid #999;
    color: #fafafa;
    padding: 10px 15px;
    margin-top: 20px;

    &:hover {
      transition: all 0.5s ease-in-out;
      background: #538ff7;
      color: #333;
    }
  }
`;
