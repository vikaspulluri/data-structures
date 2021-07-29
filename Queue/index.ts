import { Queue } from "./Queue";

const q = new Queue();

q.enqueue(5);
q.enqueue(6);
q.enqueue(7);
q.dequeue();
q.display();