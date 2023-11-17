import { style } from '@vanilla-extract/css';

export const todoTemplate = style({
  width: 700,
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '6rem',
  borderRadius: 4,
  outline: '1px solid #ededed',
});

export const appTitle = style({
  background: '#19B75E',
  color: 'white',
  height: '4rem',
  fontSize: '1.5rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const content = style({
  background: 'white',
});
