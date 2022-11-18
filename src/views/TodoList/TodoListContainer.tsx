import React, { PropsWithChildren } from "react";
import { TodoItem } from "./TodoItem";
import { FilterBy, ITodo } from "./types";

interface Props {
  filter: FilterBy;
  todos: ITodo[];
}
export const TodoListContainer = ({
  filter,
  todos,
}: PropsWithChildren<Props>) => {
  const renderItem = (todo: ITodo, i: number): JSX.Element => (
    <TodoItem key={i.toString()} todo={todo} />
  );
  return (
    <>
      <h2>Todos:</h2>
      <ul>
        {filter == FilterBy.Done
          ? todos.filter((e) => e.done).map(renderItem)
          : filter == FilterBy.Pending
          ? todos.filter((e) => !e.done).map(renderItem)
          : todos.map(renderItem)}
      </ul>
    </>
  );
};
