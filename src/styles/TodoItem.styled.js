import styled from "styled-components";

export const ListItemWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  font-size: 1.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #333;
  border-bottom: 4px solid #333;
  border-radius: 10px;
  padding: 10px 10px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  max-width: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 2rem;
  cursor: pointer;
`;

export const CheckIconStyle = {
  color: "green",
};
