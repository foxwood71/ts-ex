// lnklist_obj.ts: 객체 지향 프로그래밍을 사용한 연결 리스트 구현
class Node<T> {
  private _data: T;
  private _next: Node<T> | null;

  constructor(data: T, next: Node<T> | null = null) {
    this._data = data;
    this._next = next;
  }
  // Getter와 Setter를 사용하여 데이터와 다음 노드에 접근
  get data(): T {
    return this._data;
  }
  // 다음 노드가 없으면 null을 반환
  get next(): Node<T> | null {
    return this._next;
  }
  // Setter를 사용하여 데이터와 다음 노드를 설정
  set data(value: T) {
    this._data = value;
  }
  // 다음 노드를 설정
  set next(node: Node<T> | null) {
    this._next = node;
  }
}

// Iterator 인터페이스: 순회하는 객체 표준
interface Iterator<T> {
  // Iterator<T> 제너릭 인터페이스 순회할 요소의 타입을 T로 받습니다
  next(): { value: T | null; done: boolean }; // 객체반환 next 메서드
}

// Iterable 인터페이스: Iterator를 반환하는 객체 표준
interface Iterable<T> {
  createIterator(): Iterator<T>;
}

// LinkedList 클래스: Iterable 구현
class LinkedList<T> implements Iterable<T> {
  private _head: Node<T> | null = null;

  // 리스트 끝에 노드 추가
  push(data: T) {
    const newNode = new Node(data);
    if (!this._head) {
      this._head = newNode;
      return;
    }
    let current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  forEach(callback: (data: T) => void) {
    let current = this._head;
    while (current) {
      callback(current.data);
      current = current.next;
    }
  }

  // Iterator 생성
  createIterator(): Iterator<T> {
    return new LinkedListIterator(this._head);
  }
}

// LinkedListIterator 클래스: Iterator 구현
class LinkedListIterator<T> implements Iterator<T> {
  private current: Node<T> | null;

  constructor(startNode: Node<T> | null) {
    this.current = startNode;
  }

  next(): { value: T | null; done: boolean } {
    if (this.current === null) {
      return { value: null, done: true };
    }
    const value = this.current.data;
    this.current = this.current.next;
    return { value, done: false };
  }
}

// 사용 예제
const list1 = new LinkedList<number>();
list1.push(10);
list1.push(20);
list1.push(30);

const iterator1 = list1.createIterator();
let result = iterator1.next();
while (!result.done) {
  console.log(result.value); // 10, 20, 30 순서로 출력
  result = iterator1.next();
}

const list2 = new LinkedList<number>();
list2.push(5);
list2.push(10);
list2.push(15);

const iterator2 = list2.createIterator();

for (let result = iterator2.next(); !result.done; result = iterator2.next()) {
  console.log(result.value); // 5, 10, 15 순서로 출력
}

const list3 = new LinkedList<number>();

list3.push(100);
list3.push(200);
list3.push(300);

list3.forEach((value) => {
  console.log(value); // 100, 200, 300 순서로 출력
});
