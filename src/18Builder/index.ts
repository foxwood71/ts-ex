// Builder Pattern
//  - 복잡하게 구성된 객체를 효과적으로 생성하는 패턴
//  - 알려지 Builder 패턴은 2가지임
//    1) 생성시 지정해야 할 인자가 많을 때 사용하는 패턴
//    2) 객체 생성시 여러 단계를 순차적으로 거칠 때, 이 단계의 순서를 결정해 두고 각 단계를 다양하게 구현할 수 있도록 하는 패턴
//
// [패턴 정리]
//  - Builder 패턴은 복잡한 설정으로 구성된 객체를 좀더 효과적으로 생성하기 위한 패턴으로...
//  - Builder 패턴의 목적은 2가지로
//    (1) 객체 생성 시 생성자의 인자가 너무 많을 경우에 좀더 효과적으로 생성하기 위해 사용되거나,
//    (2) 여러 단계에 걸쳐 객체가 생성될 때 각 단계를 다양한 목적에 따라 구현하기 위해 사용됩니다.
//
// 패턴1 import
import Car from "./Car";
import CarBuilder from "./CarBuilder";

// 패턴2 import
import Data from "./Data";
import Director from "./Director";
import PlainTextBuilder from "./PlainTextBuilder";
import JSONBuilder from "./JSONBuilder";
import XMLBuilder from "./XMLBuilder";

// 패턴1 예제
const car1 = new Car("V7", true, "black", true, false);

car1.print();

const car2 = new CarBuilder()
  .setEngine("v9")
  .setAirbag(false)
  .setCameraSensor(true)
  .setColor("white")
  .setAEB(false)
  .build();

car2?.print();

const carBuilder = new CarBuilder();
const blackCar = carBuilder
  .setEngine("v9")
  .setAirbag(false)
  .setCameraSensor(true)
  .setColor("black")
  .setAEB(false)
  .build();
// 원하는 속성만 변경
const whiteCar = carBuilder.setColor("white").build();
// engine, airbag 등은 기존 설정값 사용

blackCar?.print();
whiteCar?.print();

// 패턴2 예제 (통상 빌트패턴이라고 호칭하는 주된 패턴)
const data = new Data("Jane", 76);

const builder = new PlainTextBuilder(data);
const director = new Director(builder);
const result = director.build();

console.log(result);

const jsonBuilder = new JSONBuilder(data);
const jsonDirector = new Director(jsonBuilder);
const jsonResult = jsonDirector.build();

console.log(jsonResult);

const xmlBuilder = new XMLBuilder(data);
const xmlDirector = new Director(xmlBuilder);
const xmlResult = xmlDirector.build();

console.log(xmlResult);
