import { useTodo } from '../../hooks/useTodo';
import TodoListItem from './TodoListItem';
import { Todo } from '../../store';
import { text, todoListItem } from './todoListItem.css';

export default function TodoLists({ type }: { type: string }) {
  const { getTodos } = useTodo();

  return (
    <>
      {getTodos(type).length === 0 ? (
        <div className={todoListItem}>
          <div className={text}>👉</div>
        </div>
      ) : (
        <></>
      )}
      {getTodos(type).map((todo: Todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </>
  );
}
