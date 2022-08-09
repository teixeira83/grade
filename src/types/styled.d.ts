import 'styled-components';

interface IStyleGuide {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    details: string;
    text: string;
    textLight: string;
    attention: string;
    warning: string;
  };

  fonts: {
    large: number;
    medium: number;
    small: number;
  };

  spacing: number;
}

declare module 'styled-components' {
  export interface DefaultTheme extends IStyleGuide {}
}

export { IStyleGuide };
