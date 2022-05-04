import styled from "styled-components";

export const NavWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 15px auto;
  border-bottom: 2px dashed #333;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;

    a {
      font-size: 3rem;
      text-decoration: none;
      color: deeppink;
      font-weight: 700;

      &:hover {
        transition: all 0.3s ease-in-out;
        color: #65b867;
      }
    }

    div a {
      font-size: 1.3rem;
      padding-left: 15px;
    }

    p {
      font-size: 2rem;
      color: deepskyblue;
      -webkit-text-stroke: 1px #333;
    }

    span {
      font-size: 1.2rem;
      padding-right: 15px;
    }

    button {
      border: none;
      border-radius: 10px;
      border-bottom: 4px solid #999;
      background: #ff1493;
      color: #fafafa;
      padding: 10px 30px;
      font-size: 1.3rem;
      margin-top: 15px;
      /* margin-bottom: 30px; */
      cursor: pointer;

      &:hover {
        transition: all 0.3s ease-in-out;
        background: #f6bd41;
        color: #333;
      }
    }
  }

  @media (max-width: 540px) {
    nav {
      flex-direction: column;
      align-items: center;
      margin-bottom: 10px;
    }
  }
`;
