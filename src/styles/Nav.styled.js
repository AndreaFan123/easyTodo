import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-bottom: 2px dashed #333;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0 20px;

    a {
      font-size: 3rem;
      text-decoration: none;
      color: deeppink;
      font-weight: 700;
    }

    p {
      font-size: 1.5rem;
      color: deepskyblue;
      -webkit-text-stroke: 1px #333;
    }
  }
`;
