import facepaint from 'facepaint';
import styled from '@emotion/styled';
import { isInteger, getTheme, getBreakpoints } from './utils';

type TwoToEleven = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
type OneToTwelve = 1 | TwoToEleven | 12;
type ZeroToTwelve = 0 | OneToTwelve;

type Offset = 0 | 1 | TwoToEleven;
type Order = ZeroToTwelve | 'first' | 'last';
type Column = OneToTwelve;

export interface ColProps {
  /**
   * Removes the padding around Column
   */
  noGutters?: boolean;
  /**
   * The number of columns to offset on extra small devices
   */
  xsOffset?: Offset;
  xsOrder?: Order;
  /**
   * The number of columns to span on extra small devices
   */
  xs?: Column;
  /**
   * The number of columns to offset on small devices
   */
  smOffset?: Offset;
  smOrder?: Order;
  /**
   * The number of columns to span on small devices
   */
  sm?: Column;
  /**
   * The number of columns to offset on medium devices
   */
  mdOffset?: Offset;
  mdOrder?: Order;
  /**
   * The number of columns to span on medium devices
   */
  md?: Column;
  /**
   * The number of columns to offset on large devices
   */
  lgOffset?: Offset;
  lgOrder?: Order;
  /**
   * The number of columns to span on large devices
   */
  lg?: Column;
  /**
   * The number of columns to offset on extra large devices
   */
  xlOffset?: Offset;
  xlOrder?: Order;
  /**
   * The number of columns to span on extra large devices
   */
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
