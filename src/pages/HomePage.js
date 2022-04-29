import React from "react";

import { LinkStyle, Wrapper, AddtodoIcon } from "../styles/Home.styled";
import { FaList } from "react-icons/fa";

export default function HomePage() {
  return (
    <Wrapper>
      <LinkStyle to="/lists">
        <p>Add todo here</p>
        <FaList style={AddtodoIcon} />
      </LinkStyle>
    </Wrapper>
  );
}
