declare module 'react-katex' {
  import { ComponentType } from 'react';

  export interface KatexProps {
    math?: string;
    children?: string;
    errorColor?: string;
    renderError?: (error: Error | TypeError) => JSX.Element;
    settings?: object;
  }

  export const InlineMath: ComponentType<KatexProps>;
  export const BlockMath: ComponentType<KatexProps>;
}
