export default interface Command {
  run(): void;
  undo(): void;
}
