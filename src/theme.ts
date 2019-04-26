export interface Theme {
  breakpoints: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
  maxWidths: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
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
    sm: 540,
    md: 720,
    lg: 960,
    xl: 1140,
  },
  gutters: 15,
};

export default defaultTheme;
