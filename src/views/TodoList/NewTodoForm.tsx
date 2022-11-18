import { PropsWithChildren, useState } from "react";
import { Button } from "../../components/Button";
import { ITodo } from "./types";

interface Props {
  setTodos: React.Dispatch<React.SetStateAction<ITodo[] | undefined>>;
}
export const NewTodoForm = ({ setTodos }: PropsWithChildren<Props>) => {
  const [todoText, setTodoText] = useState("");
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setTodoText(e.target.value);
  };
  const submitTodo: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    if (todoText.length <= 0) {
     alert("Todo vacio")
     return  
    }
    const todo = { done: false, text: todoText };
    setTodos((todos) => (todos ? [...todos, todo] : [todo]));
  };
  return (
    <>
      <input
        placeholder="Nueva todo"
        onChange={onChangeHandler}
        value={todoText}
      />
      <Button onClick={submitTodo}>Agregar</Button>
    </>
  );
};
