declare namespace google.script.url {
  interface IUrlLocation {
    hash: string;
    parameter: { [key: string]: any };
    parameters: { [key: string]: any[] };
  }

  function getLocation(callback: (location: IUrlLocation) => void): void;
}
