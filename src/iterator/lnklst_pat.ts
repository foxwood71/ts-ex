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

class LinkedList<T> implements Iterable<T> {
  private _head: Node<T> | null = null;

  // 리스트 끝에 데이터 추가
  public push(data: T): void {
    const newNode = new Node<T>(data);
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
  // Iterable 인터페이스 구현: Symbol.iterator 메서드
  *[Symbol.iterator](): Iterator<T> {
    let current = this._head;
    while (current) {
      yield current.data;
      current = current.next;
    }
  }
}

// 사용 예제
const list = new LinkedList<number>();
list.push(1);
list.push(2);
list.push(3);

for (const value of list) {
  console.log(value); // 1 2 3
}
