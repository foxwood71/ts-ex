import type Command from "./Command";
import Draw from "./Draw";

export default class PlayCommand extends Draw implements Command {
  private _commands = new Array<Command>();
  private _playIndex = 0;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
  }

  addCommand(command: Command): void {
    this._commands.push(command);
  }

  run(): void {
    setTimeout(() => {
      if (this._playIndex < this._commands.length) {
        const command = this._commands[this._playIndex];
        command?.run();
        this._playIndex++;
        this.run();
      } else {
        this._playIndex = 0;
      }
    }, 1000);
  }

  undo(): void {
    throw new Error("Method not implemented.");
  }
}
