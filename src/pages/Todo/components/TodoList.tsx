import * as React from 'react';
import TodoItem from './TodoItem';
import styles from './Todo.module.css';
import { ITodo, TodoContextType } from '../../../@types/todo';

export interface ITodoListProps {
  todos: ITodo[];
  updateTodo: (id: string, status: boolean) => void;
}

export default function TodoList({ todos, updateTodo }: ITodoListProps) {
  const [scroll, setScroll] = React.useState(false);

  const todoListRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const height: number = Number(todoListRef.current?.offsetHeight);
    if (height >= 380) {
      setScroll(true);
    }
  }, [todoListRef, todos]);

  return (
    <div className={` ${scroll && styles.todoList}`} ref={todoListRef}>
      {todos.map((todo: ITodo) => (
        <TodoItem todo={todo} key={todo._id} updateTodo={updateTodo} />
      ))}
    </div>
  );
}
