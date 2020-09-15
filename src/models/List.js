import uniqid from 'uniqid';

export default class List {
	constructor() {
		this.items = [];
	}

	addItem (count, unit, ingredient) {
		const item = {
			id: uniqid(),
			count,
			unit,
			ingredient
		}
		this.items.push(item);
		return item;
	}

	deleteItem(id) {
		const index = this.items.findIndex(el => el.id === id);		
		// [2,4,8] splice(1,2) --> 1st argument-start index, 2nd argument-no. of elements, delete some items and mutate the original array and return that deleted elements,--> returns [4,8], original array is [2].
		// [2,4,8] slice(1, 2) -->1st and 2nd arguments are starting and last index (exclude last element), gives no. of elements but doesn't mutate the original array  --> returns 4, original array is [2,4,8]
		this.items.splice(index, 1);
	}

	updateCount(id, newCount) {
		this.items.find(el => el.id === id).count = newCount;
	}
}