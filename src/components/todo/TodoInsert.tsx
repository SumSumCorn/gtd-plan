import { useTodo } from '../../hooks/useTodo';
import { todoInsert, todoButton, todoInput } from './todoInsert.css';
import { MdAdd } from 'react-icons/md';
export default function TodoInsert() {
  const { inputText, setInputText, createTodo } = useTodo();

  return (
    <form
      className={todoInsert}
      onSubmit={(e) => {
        e.preventDefault();
        createTodo();
      }}
    >
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
