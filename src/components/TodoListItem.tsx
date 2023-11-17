import { MdOutlineDoDisturbOn } from 'react-icons/md';
import { todoListItem, text, remove } from './todoListItem.css';

type todo = {
  id: int;
  text: string;
};
export default function TodoListItem({ todo }: { todo: todo }) {
  return (
    <div className={todoListItem}>
      <div className={text}>{todo.text}</div>
      <div className={remove}>
        <MdOutlineDoDisturbOn />
      </div>
    </div>
  );
}
