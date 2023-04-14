import { style } from '@vanilla-extract/css';
import { color, config, DefaultReset, toRem } from 'folds';

export const Editor = style([
  DefaultReset,
  {
    backgroundColor: color.SurfaceVariant.Container,
    border: `${config.borderWidth.B300} solid ${color.SurfaceVariant.ContainerLine}`,
    borderRadius: config.radii.R400,
    overflow: 'hidden',
  },
]);

export const EditorOptions = style([
  DefaultReset,
  {
    padding: config.space.S200,
  },
]);

export const EditorTextareaScroll = style({});

export const EditorTextarea = style([
  DefaultReset,
  {
    flexGrow: 1,
    height: '100%',
    padding: `${toRem(13)} 0`,
    selectors: {
      [`${EditorTextareaScroll}:first-child &`]: {
        paddingLeft: toRem(13),
      },
      [`${EditorTextareaScroll}:last-child &`]: {
        paddingRight: toRem(13),
      },
    },
  },
]);

export const EditorToolbar = style([
  DefaultReset,
  {
    padding: config.space.S100,
  },
]);
