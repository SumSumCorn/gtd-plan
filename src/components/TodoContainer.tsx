import TodoInsert from './TodoInsert';
import TodoLists from './TodoLists';
import { todoTemplate, appTitle, content } from './todoContainer.css';

export default function TodoContainer() {
  return (
    <div className={todoTemplate}>
      <div className={appTitle}>Today's TODOs</div>
      <TodoInsert />
      <div className={content}>
        <TodoLists />
      </div>
    </div>
  );
}
