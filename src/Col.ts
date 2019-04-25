import facepaint from 'facepaint';
import styled from './styled';
import { isInteger, getTheme, getBreakpoints } from './utils';

type TwoToEleven = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type OneToTwelve = 1 | TwoToEleven | 12;
type ZeroToTwelve = 0 | OneToTwelve;

type Offset = 0 | 1 | TwoToEleven;
type Order = ZeroToTwelve | 'first' | 'last';
type Column = OneToTwelve;

export interface ColProps {
  noGutters?: boolean;
  xsOffset?: Offset;
  xsOrder?: Order;
  xs?: Column;
  smOffset?: Offset;
  smOrder?: Order;
  sm?: Column;
  mdOffset?: Offset;
  mdOrder?: Order;
  md?: Column;
  lgOffset?: Offset;
  lgOrder?: Order;
  lg?: Column;
  xlOffset?: Offset;
  xlOrder?: Order;
  xl?: Column;
}

const toOrder = (order?: Order) => {
  if (!order || typeof order === 'number') {
    return order;
  }
  return order === 'first' ? -1 : 13;
};

const toPercent = (n: number) => {
  const percentage = (n / 12) * 100;
  return isInteger(percentage) ? `${percentage}%` : `${percentage.toFixed(6)}%`;
};

export const Col = styled.div<ColProps>`
  position: relative;
  width: 100%;
  padding-right: ${({ noGutters, theme }) =>
    noGutters ? 0 : getTheme(theme).gutters}px;
  padding-left: ${({ noGutters, theme }) =>
    noGutters ? 0 : getTheme(theme).gutters}px;

  ${p =>
    facepaint(getBreakpoints(getTheme(p.theme)))({
      marginLeft: [
        p.xsOffset && toPercent(p.xsOffset),
        p.smOffset && toPercent(p.smOffset),
        p.mdOffset && toPercent(p.mdOffset),
        p.lgOffset && toPercent(p.lgOffset),
        p.xlOffset && toPercent(p.xlOffset),
      ],
      flex: [
        p.xs ? `1 0 ${toPercent(p.xs)}` : '1 0 0',
        p.sm && `1 0 ${toPercent(p.sm)}`,
        p.md && `1 0 ${toPercent(p.md)}`,
        p.lg && `1 0 ${toPercent(p.lg)}`,
        p.xl && `1 0 ${toPercent(p.xl)}`,
      ],
      maxWidth: [
        p.xs ? toPercent(p.xs) : '100%',
        p.sm && toPercent(p.sm),
        p.md && toPercent(p.md),
        p.lg && toPercent(p.lg),
        p.xl && toPercent(p.xl),
      ],
      order: [
        toOrder(p.xsOrder),
        toOrder(p.smOrder),
        toOrder(p.mdOrder),
        toOrder(p.lgOrder),
        toOrder(p.xlOrder),
      ],
    })}
`;

Col.displayName = 'Col';
