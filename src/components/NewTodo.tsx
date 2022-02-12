import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">ToDo text</label>
      <input type="text" id="text" />
      <button>Add ToDo</button>
    </form>
  );
};

export default NewTodo;
