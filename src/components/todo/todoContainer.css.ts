import { style } from '@vanilla-extract/css';
import { myColors } from '../../app.css';

export const todoTemplate = style({
  borderRadius: 4,
  outline: '1px solid #ededed',
  border: 'dashed transparent 4px',
  marginBottom: '2rem',
});

export const todoTemplateDrop = style([
  todoTemplate,
  {
    borderColor: myColors.gray,
  },
]);

export const appTitle = style({
  background: myColors.green,
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
