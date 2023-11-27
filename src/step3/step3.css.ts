import { style } from '@vanilla-extract/css';
import { myColors } from '../app.css';

export const wrapper = style({
  width: 900,
  marginTop: '4rem',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'center',
});

export const wrapperLeft = style({
  width: '50%',
  paddingRight: '0.5rem',
  // background: 'wheat',
});

export const wrapperRight = style({
  width: '50%',
  paddingLeft: '0.5rem',
});
export const title = style({
  marginBottom: '2rem',
  color: myColors.green,
});

export const itemWrapper = style({
  width: '100%',
  marginBottom: '0.1rem',
  padding: '1rem 0.5rem',
  userSelect: 'none',
  lineHeight: '1.5rem',
  display: 'flex',
  position: 'relative',
  border: `solid ${myColors.gray} 1px`,
  borderRadius: 4,
  // outline: 'solid black 1px',
  // background: 'wheat',
  // color: 'blue',
  // cursor: 'move',
});

export const itemContent = style({
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
});

export const itemType = style({
  // outline: 'solid gray 1',
  background: myColors.green,
  borderRadius: 4,
  padding: '0.5rem 0.5rem',
  fontSize: 'medium',
});

export const itemText = style({
  padding: '0 2rem',
  fontSize: 'x-large',
});

export const dragIcon = style({
  cursor: 'move',
  width: 30,
  height: 30,
  position: 'absolute',
  right: '1rem',
  top: '1.5rem',
});

export const iconButton = style({
  width: 30,
  height: 30,
  cursor: 'pointer',
  paddingTop: 5,
  paddingRight: 15,
  ':hover': {
    color: myColors.green,
  },
  // display: 'flex',
  // alignItems: 'center',
});
