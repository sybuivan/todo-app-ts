import { title } from 'process';
import * as React from 'react';
import { ITodo, TodoContextType } from '../../@types/todo';
import todosApi from '../../api/todos';
import Input from '../../components/Input/Input';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import style from './Todo.module.css';

export interface ITodoProps {}

export function Todo(props: ITodoProps) {
  const [formData, setFormData] = React.useState<ITodo | {}>();
  const [input, setInput] = React.useState('');

  const [filter, setFilter] = React.useState(0);

  const [todos, setTodos] = React.useState([]);

  const handleOnChange = (value: string) => {
    setFormData({
      ...formData,
      title: value,
      status: false,
    });
    setInput(value);
  };

  const handleSaveTodo = async (e: React.FormEvent, formData: ITodo | any) => {
    e.preventDefault();
    try {
      await todosApi.addTodo(formData);
      setInput('');
      fechApi();
    } catch (error) {}
  };
  const handleOnChangeFilter = (id: number) => {
    setFilter(id);
  };
  const fechApi: any = async () => {
    const response: any = await todosApi.getAllTodos();
    setTodos(response.todos);
  };
  React.useEffect(() => {
    fechApi();

    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);

  const handleUpdateTodo = async (id: string, status: boolean) => {
    try {
      const response: any = await todosApi.checkTodo(id, { status: status });
      if (response.success) {
        fechApi();
      }
    } catch (error) {}
  };

  return (
    <div className={style.todoWrapper}>
      <form action="" onSubmit={(e) => handleSaveTodo(e, formData)}>
        <Input value={input} onChangeValue={handleOnChange} />
        <Filters onChangeFilter={handleOnChangeFilter} />
        <TodoList todos={todos} updateTodo={handleUpdateTodo} />
      </form>
    </div>
  );
}
