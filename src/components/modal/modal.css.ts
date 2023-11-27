import { style } from '@vanilla-extract/css';

export const modalBackdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0,0,0,0.5)',
});

export const modal = style({
  width: 600,
  padding: 20,
  backgroundColor: 'white',
  borderRadius: 10,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
});

export const text = style({
  width: '100%',
  border: 'none',
  fontSize: 'x-large',
});
