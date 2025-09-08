import type Animal from "./Animal";
import Cat from "./Cat";
import Dog from "./Dog";
import Tiger from "./Tiger";
import TigerAdapter from "./TigerAdapter";

const tiger = new Tiger();
tiger.name = "타이온";

const list = Array<Animal>();

list.push(new Dog("댕이"));
list.push(new Cat("나비"));
list.push(new Cat("츄츄"));
// list.push(tiger);  활당 오류로 sound 메서드 호출 불가
list.push(new TigerAdapter("타이온")); // 어댑터 패턴 적용

list.forEach((animal) => {
  animal.sound();
});
