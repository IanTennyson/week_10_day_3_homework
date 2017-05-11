var arrayTasks = {
//concat add 2 arrays together
	concat: function (arr1, arr2) {
		for(var num of arr2){
			arr1.push(num);
		}
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		arr.splice(index, 0, itemToAdd);
		// console.log("My array: ", arr)
		return arr;
	},
//return every item squared
	square: function (arr) {
		var squaredArr = [];
		for(var num of arr){
			squaredArr.push(num * num)
		}
		// console.log("Squared Array: ", squaredArr);
		return squaredArr;
	},

	sum: function (arr) {
		var counter = 0
		for(var num of arr){
			counter += num;
		}
		// console.log("My counter: ", counter)
		return counter;
	},

	findDuplicates: function (arr) {
		var returnArray = [];
		for(var i = 0; i < arr.length - 1; i++){
			if(arr[i + 1] === arr[i]) {
				if (!returnArray.includes(arr[i])){
					returnArray.push(arr[i]);
				}
			}
		}
		console.log("RETURN ARRAY: ", returnArray);
		return returnArray;
	},


	removeAndClone: function (arr, valueToRemove) {
		var newArray = [];
		for(item of arr){
			if(item !== valueToRemove){
				newArray.push(item);
			}
		}
		return newArray;
	},

	// findIndexesOf: function (arr, itemToFind) {
	// 	var indexArray = []
	// 	for(var item of arr){
	// 		if(item === itemToFind){
	// 			indexArray.push(arr.indexOf(item))
	// 		}
	// 	}
	// 	console.log("My indexArray: ", indexArray);
	// 	return indexArray;
	// },


	sumOfAllEvenNumbersSquared: function (arr) {
		var evenArray = [];
		var counter = 0;
		for(var num of arr){
			if (num % 2 === 0){
				evenArray.push(num);
			}
		}
		 console.log("evenArray array: ", evenArray);
		var squaredArray = this.square(evenArray);
		console.log("Squared Array: ", squaredArray);
		for(var num of squaredArray){
			counter += num;
		}
		 console.log("My COUNTER", counter);
		return counter;
	}

}

module.exports = arrayTasks