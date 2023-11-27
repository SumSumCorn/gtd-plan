import { style } from '@vanilla-extract/css';

export const todoInsert = style({
  background: '#F8F9FA',
  display: 'flex',
});

export const todoInput = style({
  background: 'none',
  flex: 1,
  outline: 'none',
  border: 'none',
  lineHeight: '2rem',
  fontSize: '1.5rem',
  color: '#222222',
  padding: '0.5rem  1.5rem',
});

export const todoButton = style({
  background: 'none',
  outline: 'none',
  border: 'none',
  paddingLeft: '1rem',
  paddingRight: '1rem',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  transition: '0.1s background ease-in',
  ':hover': {
    background: '#adb5bd',
  },
});
