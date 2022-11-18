import { useState } from "react";
import { Actions } from "./Actions";
import { NewTodoForm } from "./NewTodoForm";
import { TodoListContainer } from "./TodoListContainer";
import { FilterBy, ITodo } from "./types";

export const TodoList = () => {
  const [filterBy, setFilterBy] = useState<FilterBy>(FilterBy.All);
  const [todos, setTodos] = useState<ITodo[]>();
  return (
    <>
      <h2>TodoList</h2>
      <NewTodoForm setTodos={setTodos} />
      <p>Viendo: {filterBy}</p>
      {todos && <TodoListContainer filter={filterBy} todos={todos} />}
      <Actions setAction={setFilterBy} />
    </>
  );
};
