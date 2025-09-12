import type Item from "./Item";

export default class Shield implements Item {
  public use(): string {
    return "방패로 공격을 막았다! 손맛 짜릿!";
  }
}
