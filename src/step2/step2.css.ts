import { style } from '@vanilla-extract/css';

export const wrapper = style({
  display: 'flex',
  margin: '0 auto',
  width: 1320,
  height: '100vh',
  flexDirection: 'column',
  alignItems: 'center',
});

export const before = style({
  alignItems: 'center',
  marginTop: '4rem',
  width: 700,
});

export const after = style({
  marginTop: '4rem',
  display: 'flex',
  width: '100%',
  height: '100%',
  justifyContent: 'space-evenly',
});

export const subafter = style({
  width: 400,
  // height: '100%',
  // display: 'flex',
  // flexDirection: 'column',
  // justifyContent: 'flex-start',
});

export const nonAction = style([
  subafter,
  // {
  //   selectors: {
  //     '&:nth-child': {
  //       marginBottom: '10rem',
  //     },
  //   },
  // },
]);
export const project = style([subafter, {}]);
export const nextAction = style([subafter, {}]);
