type todo = {
  id: string,
  text: string,
};

[@react.component]
let make = () => {
  let (text, setText) = React.useState(() => "");
  let (todos, setTodos) = React.useState(() => []);

  let addTodo = event => {
    ReactEvent.Form.preventDefault(event);

    let todo = {
      id: "test",
      text: text,
    };

    setTodos(_ => todo @ todos);

    setText(_ => "");
  };

  let onChange = event => {
    ReactEvent.Form.target(event)##value |> setText;
  };

  <div className="todo-container">
    <form onSubmit={addTodo} className="todo-form">
      <input
        name="text"
        type_="text"
        value={text}
        onChange={onChange}
        placeholder="Add a new task" />
      <button type_="submit">{React.string("OK")}</button>
    </form>
  </div>;
};
