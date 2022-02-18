import facepaint from 'facepaint';
import styled from '@emotion/styled';
import { getTheme, getBreakpoints } from './utils';

export interface ContainerProps {
  /**
   * Allow the Container to fill all of it's availble horizontal space.
   */
  fluid?: boolean;
}

export const Container = styled.div<ContainerProps>`
  padding-right: ${({ theme }) => getTheme(theme).gutters}px;
  padding-left: ${({ theme }) => getTheme(theme).gutters}px;
  margin-right: auto;
  margin-left: auto;

  ${({ fluid, theme }) =>
    fluid
      ? { maxWidth: '100%' }
      : facepaint(getBreakpoints(getTheme(theme)))({
          maxWidth: [
            '100%',
            getTheme(theme).maxWidths.sm,
            getTheme(theme).maxWidths.md,
            getTheme(theme).maxWidths.lg,
            getTheme(theme).maxWidths.xl,
          ],
        })}
`;

Container.displayName = 'Container';
