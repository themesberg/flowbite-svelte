declare module 'config.js' {
  export interface Config {
    frame?: {
      textColor?: Record<string, string>;
      bgColor?: Record<string, string>;
      borderColor?: Record<string, string>;
    };
  }
}
