import defaultTheme, { Theme } from '../theme';

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger#Polyfill
export const isInteger = (value: number) =>
  typeof value === 'number' && isFinite(value) && Math.floor(value) === value;

export const getBreakpoints = (theme: Theme) =>
  Object.values(theme.breakpoints).map(bp => `@media (min-width: ${bp}px)`);

export const getTheme = (theme: Theme | {}) => {
  const themeConfig = theme || {};

  return {
    ...defaultTheme,
    // @ts-ignore
    breakpoints: { ...defaultTheme.breakpoints, ...themeConfig.breakpoints },
    // @ts-ignore
    maxWidths: { ...defaultTheme.maxWidths, ...themeConfig.maxWidths },
    ...themeConfig,
  };
};
