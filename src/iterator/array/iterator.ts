export interface Iterator<t> {
  next(): boolean;
  current(): t;
}
