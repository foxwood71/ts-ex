import type { Iterator } from "./iterator";

export interface Aggregator<t> {
  iterator(): Iterator<t>;
}
