var arrayTasks = {
//concat add 2 arrays together
	concat: function (arr1, arr2) {
		for(var num of arr2){
			arr1.push(num);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.insert(index, itemToAdd);
	},
//return every item squared
	// square: function (arr) {
		
	// },

	// sum: function (arr) {
		
	// },

	// findDuplicates: function (arr) {
		
	// },
//should remove an item from array return new array
	// removeAndClone: function (arr, valueToRemove) {
		
	// },
//
	// findIndexesOf: function (arr, itemToFind) {
		
	// },
//add all even numbers squared
	// sumOfAllEvenNumbersSquared: function (arr) {
		
	// }

}

module.exports = arrayTasks
