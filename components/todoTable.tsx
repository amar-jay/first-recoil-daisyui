import { useState } from "react";
import Image from '../components/image';
import { useRecoilState, useRecoilValue } from "recoil";
import { displayTodosState, todoListState } from "../pages/atom";
export default function TodoTable() {
  const [todos, setTodos] = useRecoilState(todoListState);
  const displaytodos = useRecoilValue(displayTodosState);
  const [currTodo, setCurrTodo] = useState<string>("");
  const [currName, setCurrName] = useState<string>("");

  const addTodo = () => {
    if (currTodo === null || currName === null) return;
    setTodos([
      ...todos,
      {
        id: todos.length,
        name: currName,
        completed: false,
        todo: currTodo,
      },
    ]);
  };

  const setDelete = (todo: typeof todos[0]) => {
    const idx = todos.findIndex((item) => item.id === todo.id);
    setTodos([...todos.slice(0, idx), ...todos.slice(idx + 1)]);
  };

  const setCompleted = (todo: typeof todos[0]) => {
    const idx = todos.findIndex((item) => item.id === todo.id);
    setTodos(
      replaceItemAtIndex(todos, idx, {
        id: todos[idx].id,
        name: todos[idx].name,
        completed: !todos[idx].completed,
        todo: todos[idx].todo,
      })
    );
  };
  return (
    <div className="relative flex justify-center items-center flex-col py-5 w-full">
      <div className="bg-base-200 flex flex-col mb-5 rounded-lg shadow-lg">
        <input
          className="input input-primary w-72 m-7 rounded-md"
          value={currName}
          placeholder={"Name"}
          onChange={(e) => setCurrName(e.target.value)}
        />
        <input
          className="input input-ghost w-72 h-7 m-7 py-5 rounded-t-md bg-base-100"
          value={currTodo}
          placeholder="Description..."
          onChange={(e) => setCurrTodo(e.target.value)}
        />
        <button
          onClick={(e) => addTodo()}
          className="btn btn-primary rounded-b-md"
        >
          Add Todo
        </button>
      </div>
      <table className="table w-1/2">
        <thead>
          <tr>
            <th>CheckBox</th>
            <th>Todo</th>
            <th>Name</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="shadow-2xl">
          {displaytodos.map((todo) => (
            <tr key={todo.id}>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox"
                    // value={todo.completed} onChange={}
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image src="/favicon.ico" className="rounded-md h-12 w-12"/>
                    </div>
                  </div>
                  <div className="font-bold">{todo.name}</div>
                </div>
              </td>
              <td className="whitespace-pre-wrap">{todo.todo}</td>
              <td>
                <button
                  onClick={(e) => setCompleted(todo)}
                  className="btn btn-secondary rounded-md"
                >
                  {todo.completed ? "Completed" : "Not Completed"}
                </button>
              </td>
              <td>
                <button
                  onClick={(e) => setDelete(todo)}
                  className="btn btn-warning rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function replaceItemAtIndex<T>(arr: T[], index: number, newValue: T) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
