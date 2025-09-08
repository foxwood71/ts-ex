// 트리 노드 정의
class TreeNode<T> {
  public _value: T;
  public _left: TreeNode<T> | null;
  public _right: TreeNode<T> | null;

  constructor(
    value: T,
    left: TreeNode<T> | null = null,
    right: TreeNode<T> | null = null
  ) {
    this._value = value;
    this._left = left;
    this._right = right;
  }
  get value(): T {
    return this._value;
  }
  get left(): TreeNode<T> | null {
    return this._left;
  }
  get right(): TreeNode<T> | null {
    return this._right;
  }
  set value(value: T) {
    this._value = value;
  }
  set left(left: TreeNode<T> | null) {
    this._left = left;
  }
  set right(right: TreeNode<T> | null) {
    this._right = right;
  }
}

// Iterator 인터페이스
interface Iterator<T> {
  next(): { value: T | null; done: boolean };
}

// 트리 Iterator 구현 (전위순회)
class TreeIterator<T> implements Iterator<T> {
  private stack: Array<TreeNode<T>> = [];

  constructor(root: TreeNode<T> | null) {
    if (root) {
      this.stack.push(root);
    }
  }

  next(): { value: T | null; done: boolean } {
    if (this.stack.length === 0) {
      return { value: null, done: true };
    }
    const node = this.stack.pop()!;
    // 전위순회: 오른쪽, 왼쪽 순서로 스택에 push (뒤에서 꺼내니까 왼쪽부터 방문)
    if (node.right) this.stack.push(node.right);
    if (node.left) this.stack.push(node.left);
    return { value: node.value, done: false };
  }
}

// 사용 예시
const root = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3)
);

const iterator = new TreeIterator(root);

for (let result = iterator.next(); !result.done; result = iterator.next()) {
  console.log(result.value); // 1, 2, 4, 5, 3 (전위순회 결과)
}
