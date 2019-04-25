import styled from './styled';
import { getTheme } from './utils';

type Align = 'start' | 'center' | 'end';
type Justify = 'start' | 'center' | 'end' | 'between' | 'around';

export interface RowProps {
  noGutters?: boolean;
  alignItems?: Align; // TODO: add align-items
  justifyContent?: Justify; // TODO: add justify-content
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
