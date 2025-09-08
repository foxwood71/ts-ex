import type { Iterator } from "./Iterator";

export interface Aggregator<t> {
  iterator(): Iterator<t>;
}
