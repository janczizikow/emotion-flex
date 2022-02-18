import styled from '@emotion/styled';
import { getTheme } from './utils';

export interface RowProps {
  /**
   * Removes Row's negative margins.
   */
  noGutters?: boolean;
}

export const Row = styled.div<RowProps>`
  display: flex;
  flex-wrap: wrap;
  margin-left: ${({ noGutters, theme }) =>
    noGutters ? 0 : `-${getTheme(theme).gutters}px`};
  margin-right: ${({ noGutters, theme }) =>
    noGutters ? 0 : `-${getTheme(theme).gutters}px`};
`;

Row.displayName = 'Row';
