export interface Theme {
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  maxWidths: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  gutters: number;
}

const defaultTheme = {
  breakpoints: {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  maxWidths: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
  gutters: 15,
};

export default defaultTheme;
