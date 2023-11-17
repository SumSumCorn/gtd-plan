import { style } from '@vanilla-extract/css';

export const todoListItem = style({
  lineHeight: '1.5rem',
  padding: '1.2rem',
  display: 'flex',
  alignItems: 'center',
  selectors: {
    '&:nth-child(even)': {
      backgroundColor: '#e9e9e9',
    },
  },
});

export const text = style({
  flex: 1,
  marginLeft: 1,
  fontSize: '1.3rem',
});

export const remove = style({
  fontSize: '1.5rem',
  color: '#ff6b6b',
  cursor: 'pointer',
  ':hover': {
    color: '#ff8787',
  },
});
