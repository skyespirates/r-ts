import React, { useRef } from "react";
interface TodoInputProps {
  addTodo: (text: string) => void;
}
function TodoInput(props: TodoInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const enteredTodo = inputRef.current!.value;
    props.addTodo(enteredTodo);
    clearInput();
  }
  function clearInput() {
    inputRef.current!.value = "";
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-control">
        <input type="text" ref={inputRef} />
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default TodoInput;
