import { createGlobalTheme, style } from '@vanilla-extract/css';

export const app = style({
  margin: '0 auto',
  padding: '2rem',
  textAlign: 'center',
});

export const myColors = createGlobalTheme(':root', {
  gray: '#d3d5d7',
  green: '#19B75E',
});
