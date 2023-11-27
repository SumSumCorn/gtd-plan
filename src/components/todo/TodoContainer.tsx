import { useState } from 'react';
import { useTodo } from '../../hooks/useTodo';
import TodoInsert from './TodoInsert';
import TodoLists from './TodoLists';
import {
  todoTemplate,
  appTitle,
  content,
  todoTemplateDrop,
} from './todoContainer.css';
import clsx from 'clsx';

export default function TodoContainer({
  title,
  type,
  insertMode = false,
}: {
  title: string;
  type: string;
  insertMode?: boolean;
}) {
  const [drop, setDrop] = useState(false);
  const { setDraggedTodo, draggedTodo, moveTodo } = useTodo();
  return (
    <div
      className={clsx({
        [todoTemplate]: !drop,
        [todoTemplateDrop]: drop,
      })}
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={(e) => {
        setDrop(false);
        moveTodo(type);
        setDraggedTodo(null);
      }}
    >
      <div className={appTitle}>{title}</div>
      {insertMode && <TodoInsert />}
      <div className={content}>
        <TodoLists type={type} />
      </div>
    </div>
  );
}
