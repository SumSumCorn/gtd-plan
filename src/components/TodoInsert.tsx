import { todoInsert, todoButton, todoInput } from './todoInsert.css';
import { MdAdd } from 'react-icons/md';
export default function TodoInsert() {
  return (
    <form className={todoInsert}>
      <input className={todoInput} placeholder='Have a faith' />
      <button type='submit' className={todoButton}>
        <MdAdd />
      </button>
    </form>
  );
}
