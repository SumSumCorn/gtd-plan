import { Link } from 'react-router-dom';
import { navbar, title } from './nav.css';

export default function Nav() {
  return (
    <div className={navbar}>
      <Link to='step1' className={title}>
        수집
      </Link>
      <Link to='step2' className={title}>
        명료화
      </Link>
      <Link to='step3' className={title}>
        정리
      </Link>
    </div>
  );
}
