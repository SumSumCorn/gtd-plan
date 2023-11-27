import { MdOutlineDoDisturbOn } from 'react-icons/md';
import { todoListItem, text, remove } from './todoListItem.css';
import { useTodo } from '../../hooks/useTodo';
import { Todo } from '../../store';

export default function TodoListItem({ todo }: { todo: Todo }) {
  const { deleteTodo, setDraggedTodo } = useTodo();

  return (
    <div
      className={todoListItem}
      draggable
      onDragStart={() => {
        setDraggedTodo(todo);
      }}
    >
      <div className={text}>{todo.text}</div>
      <div
        className={remove}
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        <MdOutlineDoDisturbOn />
      </div>
    </div>
  );
}
