import { MdCheckBoxOutlineBlank, MdOutlineDoDisturbOn } from 'react-icons/md';
import { todoListItem, text, remove } from './todoListItem.css';

export default function TodoListItem() {
  return (
    <div className={todoListItem}>
      <div className={text}>할일</div>
      <div className={remove}>
        <MdOutlineDoDisturbOn />
      </div>
    </div>
  );
}
