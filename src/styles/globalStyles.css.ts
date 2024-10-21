// globalStyles.css.ts
import { globalStyle } from '@vanilla-extract/css';
import { vars } from './globalTheme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('body', {
  margin: 0,
  fontFamily: 'Nunito, sans-serif',
  fontWeight: vars.fontWeights.regular,
  backgroundColor: vars.colors.gray[800],
  color: vars.colors.white,
  lineHeight: vars.lineHeights.base,
});

globalStyle('h1, h2, h3, h4, p', {
  margin: 0,
})

globalStyle('span', {
  fontSize: vars.fontSizes.sm,
})

