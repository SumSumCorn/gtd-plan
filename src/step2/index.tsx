import TodoContainer from '../components/todo/TodoContainer';
import {
  wrapper,
  before,
  after,
  nonAction,
  project,
  nextAction,
} from './step2.css';

export default function Step2() {
  return (
    <div className={wrapper}>
      <div className={before}>
        <TodoContainer title='오늘의 할일' type='today' />
      </div>
      <div className={after}>
        <div className={nonAction}>
          <div>해야함? 할수는 있음?</div>
          <TodoContainer title='버림' type='' />
          <TodoContainer title='언젠가' type='someday' />
          <TodoContainer title='참고자료' type='reference' />
        </div>
        <div className={project}>
          <div>여러단계를 필요로함</div>
          <TodoContainer title='프로젝트' type='project' />
        </div>
        <div className={nextAction}>
          <div>다음행동 분류</div>
          <TodoContainer title='바로하기' type='now' />
          <TodoContainer title='위임후 대기' type='delegate' />
          <TodoContainer title='캘린더' type='calender' />
        </div>
      </div>
    </div>
  );
}
