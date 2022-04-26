import React from "react";
import { FcPlus } from "react-icons/fc";
import { MdCheckCircleOutline, MdDeleteOutline } from "react-icons/md";
import {
  FormStyle,
  ListWrapper,
  TodoWrapper,
  TodoListFlex,
} from "../styles/List.styled";

export default function ListPage() {
  return (
    <ListWrapper>
      <FormStyle>
        <div>
          <input type="text" />
        </div>
        <button type="submit">
          <FcPlus size={2 + "rem"} />
        </button>
      </FormStyle>

      <TodoWrapper>
        <ul>
          <TodoListFlex>
            <p>eurfjrfkojapiohff</p>
            <div>
              <button type="submit">
                <MdCheckCircleOutline size={2 + "rem"} />
              </button>
              <button type="submit">
                <MdDeleteOutline size={2 + "rem"} />
              </button>
            </div>
          </TodoListFlex>
        </ul>
      </TodoWrapper>
    </ListWrapper>
  );
}
