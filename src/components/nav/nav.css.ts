import { style } from '@vanilla-extract/css';
import { myColors } from '../../app.css';

export const navbar = style({
  maxWidth: 1320,
  height: '5rem',
  display: 'flex',
  margin: '0 auto',
  background: myColors.green,
  color: 'white',
  fontSize: '1.5rem',
  alignItems: 'center',
  justifyContent: 'space-evenly',
});

export const title = style({
  cursor: 'pointer',
  color: 'inherit',
  padding: '1.5rem',
  position: 'relative',
  textDecoration: 'none',
  '::after': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '2rem',
    right: 0,
    width: 2,
    height: '1rem',
    backgroundColor: myColors.gray,
  },
  '::before': {
    content: '',
    display: 'block',
    position: 'absolute',
    top: '2rem',
    left: 0,
    width: 2,
    height: '1rem',
    backgroundColor: myColors.gray,
  },
});
