import * as React from 'react';
import { TodoContextType } from '../../../@types/todo';
import styles from './Todo.module.css';

export interface IFilter {
  title: string;
  active: boolean;
  id: number;
}
export interface IFiltersItemProps {
  filter: IFilter;
  onChangeFilter: (id: number) => void;
}
export interface IFiltersProps {
  onChangeFilter: (id: number) => void;
}

export const FiltersItem = ({ filter, onChangeFilter }: IFiltersItemProps) => {
  const { id, active, title } = filter;
  return (
    <li
      className={
        active
          ? `${styles.filterItem} ${styles.active}`
          : `${styles.filterItem}`
      }
      onClick={() => onChangeFilter(id)}
    >
      {title}
    </li>
  );
};

export default function Filters({ onChangeFilter }: IFiltersProps) {
  const [filters, setFilters] = React.useState([
    { id: 1, title: 'All', active: true },
    { id: 2, title: 'Pending', active: false },
    { id: 3, title: 'Completed', active: false },
  ]);
  const handleOnChangeFilter = (id: number, status?: any) => {
    const newFilters = filters.map((filter) => {
      return {
        ...filter,
        active: false,
      };
    });
    const findIndex = filters.findIndex((filter) => filter.id === id);
    if (findIndex >= 0) {
      newFilters[findIndex].active = true;
    }
    setFilters(newFilters);
    onChangeFilter(id);
  };
  return (
    <ul className={styles.filters}>
      {filters.map((filter) => (
        <FiltersItem
          filter={filter}
          key={filter.id}
          onChangeFilter={() => handleOnChangeFilter(filter.id)}
        />
      ))}

      <li className={styles.filterItem}>
        <button className={styles.filterButton}>Clear all</button>
      </li>
    </ul>
  );
}
