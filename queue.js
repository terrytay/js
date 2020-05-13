function myQueue() {
	var collection = [];

	this.enqueue = (el) => collection.push(el);

	this.enMany = function() { // Take note of this special method cannot use arrow func
		for (var element of arguments) { // using "arguments" while leaving parameters empty
			this.enqueue(element);
		}
	}

	this.dequeue = () => collection.shift(); //remove the 0-th index and shift everything left.

	this.print = () => console.log(collection);

	this.front = () => collection[0];

	this.size = () => collection.length;

	this.isEmpty = () => this.size() === 0;
}

var queue = new myQueue();


queue.enMany(23,45,67,89);
console.log(queue.front());
console.log(queue.size());
queue.dequeue();
console.log(queue.isEmpty());
queue.print();