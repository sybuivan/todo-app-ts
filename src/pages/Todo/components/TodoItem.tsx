import * as React from 'react';
import { GrMore } from 'react-icons/gr';
import { MdOutlineRadioButtonUnchecked } from 'react-icons/md';
import { BsCheck2Circle } from 'react-icons/bs';

import styles from './Todo.module.css';
import { ITodo, TodoContextType } from '../../../@types/todo';

export interface ITodoItemProps {
  todo: ITodo;
  updateTodo: (id: string, status: boolean) => void;
}

export default function TodoItem({ todo, updateTodo }: ITodoItemProps) {
  const { title, status } = todo;
  const handleOnCheckedChange = () => {
    if (status) {
      updateTodo(todo._id, false);
    } else {
      updateTodo(todo._id, true);
    }
  };
  return (
    <div className={styles.todoItem}>
      <div className={styles.todoItemChecked} onClick={handleOnCheckedChange}>
        {status ? (
          <BsCheck2Circle />
        ) : (
          <MdOutlineRadioButtonUnchecked style={{ fontSize: '17px' }} />
        )}
      </div>
      <div className={`${styles.todoItemBox} ${status && styles.active}`}>
        <p>{title}</p>
        <GrMore />
      </div>
    </div>
  );
}
