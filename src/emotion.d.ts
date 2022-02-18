import {} from '@emotion/react/types/css-prop';
import { Theme as EmotionFlexTheme } from './theme'

declare module '@emotion/react' {
  export interface Theme extends EmotionFlexTheme {}
}