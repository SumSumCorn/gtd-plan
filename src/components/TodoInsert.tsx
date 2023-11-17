import { useTodo } from '../hooks/useTodo';
import { todoInsert, todoButton, todoInput } from './todoInsert.css';
import { MdAdd } from 'react-icons/md';
export default function TodoInsert() {
  const { inputText, setInputText } = useTodo();

  return (
    <form className={todoInsert}>
      <input
        className={todoInput}
        placeholder='Have a faith'
        value={inputText}
        onChange={(e) => {
          e.preventDefault();
          setInputText(e.target.value);
        }}
      />
      <button type='submit' className={todoButton}>
        <MdAdd />
      </button>
    </form>
  );
}
