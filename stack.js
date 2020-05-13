// push, pop, peek, size
function myStack() {
	this.count = 0;
	this.storage = {};

	this.push = (val) => {
		this.storage[this.count] = val;
		this.count++;
	}

	this.pop = () => {
		if (this.count == 0) {
			return undefined;
		}

		this.count--;
		var result = this.storage[this.count];
		delete this.storage[this.count];
		return result;
	}

	this.peek = () => {
		if (this.count == 0) {
			return undefined;
		}

		return this.storage[this.count - 1];
	}

	this.size = () => {
		return this.count;
	}
}

var temp = new myStack();
temp.push(5);
console.log(temp.peek()); // 5

temp.push(10);
console.log(temp.peek()); // 10

temp.pop();
console.log(temp.peek()); // 5

temp.push(15);
temp.push("a");
console.log(temp.peek()); // a
console.log(temp.size()); // 3