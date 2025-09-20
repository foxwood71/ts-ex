export default abstract class Handler {
    protected nextHandler: Handler | null;
    setNext(handler: Handler): Handler;
    protected abstract process(url: string): void;
    run(url: string): void;
    protected displayResult(title: string, content: string): void;
}
//# sourceMappingURL=Handler.d.ts.map