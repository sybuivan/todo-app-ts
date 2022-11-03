// @types.todo.ts
export interface ITodo {
  _id: string;
  title: string;
  description: string;
  status: boolean;
}
export type TodoContextType = {
  todos: ITodo[];
  saveTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
};
