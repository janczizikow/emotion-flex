import { getTheme } from '../src/utils';
import defaultTheme from '../src/theme';
import { customTheme } from './test-helpers';

describe('getTheme', () => {
  it('returns defaultTheme when given falsy value', () => {
    // @ts-ignore
    expect(getTheme(undefined)).toEqual(defaultTheme);
  });

  it('returns defaultTheme when given empty object', () => {
    expect(getTheme({})).toEqual(defaultTheme);
  });

  it('returns customTheme when given an argument', () => {
    expect(getTheme(customTheme)).toEqual(customTheme);
  });
});
