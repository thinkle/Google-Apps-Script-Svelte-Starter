declare namespace google.script.host {
  function close(): void;
  function setHeight(height: number): void;
  function setWidth(width: number): void;

  namespace editor {
    function focus(): void;
  }
}
