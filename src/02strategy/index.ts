import LoopSumStrategy from "./LoopSumStrategy";
import GaussSumStrategy from "./GaussSumStrategy";
import SumPrinter from "./SumPrinter";

const printer = new SumPrinter();

// const dom1 = document.createElement("h1");
// document.body.append(dom1);

// const dom2 = document.createElement("h1");
// document.body.append(dom2);

document.addEventListener("DOMContentLoaded", () => {
  const dom1 = document.createElement("h1");
  if (document.body) {
    document.body.append(dom1);
  }

  const dom2 = document.createElement("h1");
  if (document.body) {
    document.body.append(dom2);
  }
  printer.print(new GaussSumStrategy(), 100, dom1);
  printer.print(new LoopSumStrategy(), 100, dom2);
});
