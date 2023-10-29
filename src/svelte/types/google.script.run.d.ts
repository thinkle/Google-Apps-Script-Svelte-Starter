
declare namespace google.script {  
  interface GoogleScriptRun {
      withFailureHandler(callback: (error: Error, object?: any) => void): this;
      withSuccessHandler(callback: (value: any, object?: any) => void): this;
      withUserObject(object: Object): this;
      getActiveUserEmail(): void;
  testMe(number: number): void;
  foo(s: string): void
  }
  const run : GoogleScriptRun;

  interface GoogleScriptHost {
  close(): void;
  setHeight(height: number): void;
  setWidth(width: number): void;
  editor: {
    focus(): void;
  };
}
const host : GoogleScriptHost;
  

  interface IUrlLocation {
  hash: string;
  parameter: { [key: string]: any };
  parameters: { [key: string]: any[] };
}

interface GoogleScriptUrl {
  getLocation(callback: (location: IUrlLocation) => void): void;
}
const url : GoogleScriptUrl;
  
}
