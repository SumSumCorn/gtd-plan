import { wrapper, title, wrapperRight, wrapperLeft } from './step3.css';
import { IoRocketOutline } from 'react-icons/io5';
import { IoMdClock } from 'react-icons/io';
import { FaProjectDiagram } from 'react-icons/fa';
import Calender from './Calender';
import Project from './Project';
import List from './List';

export default function Step3() {
  return (
    <div className={wrapper}>
      <div className={wrapperLeft}>
        <div className={title}>
          <IoRocketOutline size={60} />
        </div>
        <List />
      </div>
      <div className={wrapperRight}>
        <div>
          <div className={title}>
            <IoMdClock size={60} />
          </div>
          <Calender />
        </div>
        <div>
          <div className={title}>
            <FaProjectDiagram size={60} />
          </div>
          <Project />
        </div>
      </div>
    </div>
  );
}
