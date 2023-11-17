import { useTodo } from '../hooks/useTodo';
import TodoListItem from './TodoListItem';

type todo = {
  id: number;
  text: string;
};
export default function TodoLists() {
  const { todos } = useTodo();

  return (
    <div>
      {todos.map((todo: todo) => {
        return <TodoListItem todo={todo} key={todo.id} />;
      })}
    </div>
  );
}
