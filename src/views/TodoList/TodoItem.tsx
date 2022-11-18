import { PropsWithChildren, useState } from "react";
import { ITodo } from "./types";
import "./style.css";

interface Props {
  todo: ITodo;
}
export const TodoItem = ({ todo }: PropsWithChildren<Props>) => {
  const [done, setDone] = useState(todo.done);
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log({ checked: e.target.checked });
    setDone(e.target.checked)
  };
  return (
    <div className="todoItem">
      <label>
        <h3>
          <input type="checkbox" onChange={onChangeHandler} checked={done} />
          {todo.text}
        </h3>
      </label>
    </div>
  );
};
