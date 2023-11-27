import TodoContainer from '../components/todo/TodoContainer';
import { wrapper } from './step1.css';

export default function Step1() {
  return (
    <div className={wrapper}>
      <TodoContainer title='오늘의 할일' insertMode={true} type='today' />
    </div>
  );
}
