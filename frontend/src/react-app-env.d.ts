/* eslint-disable spaced-comment, @typescript-eslint/no-explicit-any */

/// <reference types="react-scripts" />

interface Window {
  INITIAL_REDUX_STATE: any;
}

declare module '*.inline.css' {
  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
