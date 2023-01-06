function solution(queue1, queue2) {
  let count = 0;

  const [q1, q2] = [new Queue(), new Queue()];
  queue1.map((i) => q1.insert(i));
  queue2.map((i) => q2.insert(i));

  if ((q1.sum + q2.sum) % 2 === 1) return -1;
  while (q2.sum !== q1.sum) {
    if (q1.sum === 0 || q2.sum === 0) {
      count = -1;
      break;
    }

    if (q1.sum > q2.sum) {
      q2.insert(q1.remove());
    } else {
      q1.insert(q2.remove());
    }
    count++;
    if (q1.sum === q2.sum) break;
  }

  return count;
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.sum = 0;
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) this.front = newNode;
    else this.rear.next = newNode;
    // after doing all that we are going to shift the new node rear pointer to the new node
    this.sum = this.sum + data;
    this.rear = newNode;
  }

  remove() {
    if (this.isEmpty()) return;

    const data = this.front.data;

    this.front = this.front.next;
    this.sum = this.sum - data;

    if (!this.front) this.rear = null;

    return data;
  }
}
