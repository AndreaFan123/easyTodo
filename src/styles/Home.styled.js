import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 30px auto;
  display: flex;
  justify-content: center;
`;

export const LinkStyle = styled(NavLink)`
  color: #333;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #333;
  border-bottom: 6px solid #333;
  border-radius: 10px;
  padding: 20px 70px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #f6bd41;
    color: #333;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    font-size: 1.5rem;
  }
`;

export const AddtodoIcon = {
  fontSize: "2rem",
  marginLeft: "20px",
};
