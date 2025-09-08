import type SumStrategy from "./SumStrategy";

export default class SumPrinter {
  print(strategy: SumStrategy, N: number, domOutput: HTMLElement): void {
    const value = strategy.get(N);
    domOutput.innerHTML = `1~${N}까지의 총합 = ${value}`;
  }
}
