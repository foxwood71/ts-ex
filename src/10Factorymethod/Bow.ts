import type Item from "./Item";

export default class Bow implements Item {
  public use(): string {
    return "화살로 멀리서 쐈다! 약오루지?";
  }
}
