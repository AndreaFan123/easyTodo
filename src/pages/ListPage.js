import React from "react";
import { FormWrapper } from "../styles/List.styled";
import { FaPlusSquare } from "react-icons/fa";

export default function ListPage() {
  return (
    <FormWrapper>
      <h2>What's your plan today?</h2>
      <form>
        <input type="text" />
        <button>
          <FaPlusSquare />
        </button>
      </form>
    </FormWrapper>
  );
}
