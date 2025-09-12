import type Item from "./Item";

export default class Sword implements Item {
  public use(): string {
    return "칼로 쌱 베었다. 음메 잔인한거?";
  }
}
