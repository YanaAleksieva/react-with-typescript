import React, { useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    // ! operator - tells TS that we are sure enteredText will never be null, ? operator - shows that we are unsure
    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">ToDo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
