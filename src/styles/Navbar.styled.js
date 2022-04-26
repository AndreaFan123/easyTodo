import styled from "styled-components";

export const NavStyle = styled.nav`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 2px solid hsl(0, 0%, 30%, 1);
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  a {
    text-decoration: none;
    color: hsl(218, 91%, 64%);
    font-size: 2.3rem;
    font-weight: 600;

    &:hover {
      color: hsl(41, 91%, 61%);
      transition: all 0.5s ease-in-out;
    }
  }

  p {
    font-size: 1.5rem;
    color: hsl(218, 60%, 60%);
  }
`;

export const NavWrapper = styled.div`
  padding: 0 20px;
`;
