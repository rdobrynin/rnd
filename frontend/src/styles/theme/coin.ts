import { ITheme } from '@/utils/styled';

export const coinTheme: ITheme = {
  colors: {
    background: '#ffffff',
    body: '#000000',
    headings: '#000000',
    black: '#000000',
    white: '#ffffff',
    brand: '#999999',
    borders: '#888888',
    attrs: {
      str: '#B4BEC6',
      agi: '#39d402',
      int: '#C6D2E5',
    },
  },
  fontSizes: {
    h1: '2.441rem',
    h2: '1.953rem',
    h3: '1.563rem',
    h4: '1.25rem',
  },
  containerPadding: '1.5rem',
  breakpoints: {
    xs: '0px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
  widths: {
    md: '767px',
    lg: '940px',
    xl: '1110px',
  },
  heights: {
    header: '60px',
  },
  zIndex: {
    default: 1,
    overlay: 1000,
  },
};
