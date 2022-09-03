import React from "react";
import { Todo } from "../models/todo.model";
interface TodoListProps {
  todo: { id: string; text: string }[];
}
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todo.map((item: Todo) => (
        <li key={item.id}>
          <span>{item.text}</span>
          <button>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
