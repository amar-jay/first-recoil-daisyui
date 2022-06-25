import { atom, selector } from "recoil";

export const countState = atom({
  key: "count",
  default: 0,
});

export const powerCountState = selector({
  key: "multiple",
  get: ({ get }) => {
    const n = get(countState);

    return n ** 2;
  },
});
type Todo = {
  id: number;
  name: string;
  todo: string;
  completed: boolean;
};
export const todoListState = atom<Todo[]>({
  key: "TodoList",
  default: [
    {
      id: 0,
      name: "Dog",
      todo: "Walk with the dog 🐕",
      completed: true,
    },
  ],
});

export const selectedState = atom<string>({
  key: "selectedState",
  default: "Show All",
});

export const displayTodosState = selector({
  key: "displayTodosState",
  get: ({ get }) => {
    const todos = get(todoListState);
    const selected = get(selectedState);

    switch (selected) {
      case "Show All":
        return todos;
      case "Show Completed":
        return todos.filter((todo) => todo.completed === true);
      case "Show Uncompleted":
        return todos.filter((todo) => todo.completed === false);
      default:
        return todos;
    }
  },
});
