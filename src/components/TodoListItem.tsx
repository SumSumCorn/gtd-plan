import { MdOutlineDoDisturbOn } from 'react-icons/md';
import { todoListItem, text, remove } from './todoListItem.css';
import { useTodo } from '../hooks/useTodo';

type todo = {
  id: number;
  text: string;
};
export default function TodoListItem({ todo }: { todo: todo }) {
  const { deleteItem } = useTodo();

  return (
    <div className={todoListItem}>
      <div className={text}>{todo.text}</div>
      <div
        className={remove}
        onClick={() => {
          deleteItem(todo.id);
        }}
      >
        <MdOutlineDoDisturbOn />
      </div>
    </div>
  );
}
