import TodoInsert from './TodoInsert';
import { todoTemplate, appTitle, content } from './todoTemplate.css';

export default function TodoTemplate({
  children,
}: {
  children: React.JSX.Element[];
}) {
  return (
    <div className={todoTemplate}>
      <div className={appTitle}>Today's TODO</div>
      <TodoInsert />
      <div className={content}>{children}</div>
    </div>
  );
}
