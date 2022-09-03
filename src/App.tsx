import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import { Todo } from "./models/todo.model";

function App() {
  const [todo, setTodo] = useState<Todo[]>([
    { id: "123", text: "hello world" },
  ]);
  function addTodo(text: string): void {
    setTodo((state) => [...state, { id: Math.random().toString(), text }]);
  }
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
      <Container>
        <TodoInput addTodo={addTodo} />
      </Container>
      <Container>
        <TodoList todo={todo} />
      </Container>
    </div>
  );
}

export default App;
