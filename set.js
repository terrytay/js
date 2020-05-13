function mySet() {
	var collection = [];

	this.has = (element) => {
		return (collection.indexOf(element) !== -1); // compares both type and content
	};

	this.values = () => collection;

	this.add = (element) => {
		if (!this.has(element)) {
			collection.push(element);
		}
	}

	this.addMany = function() { // Take note of this special method cannot use arrow func
		for (var element of arguments) { // using "arguments" while leaving parameters empty
			this.add(element);
		}
	}

	this.remove = (element) => { //default set remove is call delete
		if (this.has(element)) {
			index = collection.indexOf(element);
			collection.splice(index, 1); // splice removes 1 element starting from index

		}
	}

	this.size = () => {
		return collection.length;
	}

	this.union = (otherSet) => {
		var unionSet = new Set();
		var firstSet = this.values();
		var secondSet = otherSet.values();

		firstSet.forEach((e) => unionSet.add(e));
		secondSet.forEach((e) => unionSet.add(e));
		return unionSet;
	}

	this.intersection = (otherSet) => {
		var intersectionSet = new Set();
		var firstSet = this.values();

		firstSet.forEach((e) => {
			if (otherSet.has(e)) {
				intersectionSet.add(e);
			}
		});

		return intersectionSet;
	}

	this.difference = (otherSet) => { // The difference of two sets, written A - B is the set of all elements of A that are not elements of B
		var differenceSet = new Set();
		var firstSet = this.values();

		firstSet.forEach((e) => {
			if (!otherSet.has(e)) {
				differenceSet.add(e);
			}
		});
		return differenceSet;
	}

	this.subset = (otherSet) => {
		var firstSet = this.values();
		return firstSet.every((val) => otherSet.has(val));
	}


}

var set = new mySet();
var set2 = new mySet();
	

set.add(5);
console.log(set.has(5));

set.add(10);
console.log(set.values());

console.log(set.size()); // normal set in js set.size instead of set.size() as size is property

set2.add(232323);
set2.add(5);
set2.add(10);

console.log(set.union(set2));

var set3 = new mySet();
set3.add(10);
set3.add(15);

var set4 = new mySet();
set4.add(10);
set4.add(20);

console.log(set4.intersection(set3));

console.log(set4.difference(set3));

var set5 = new mySet();
set5.add(10);
set5.add(20);
set5.add(30);

console.log(set4.subset(set5));

set5.remove(10);
console.log(set5.values());

var set6 = new mySet();
set6.addMany(1,2,3,4,5,6);
set6.add(0);
console.log(set6.values());