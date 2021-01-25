// forEach
[1, 2, 3].forEach (function (item, index) {
	console.log (item, index);
});
// The forEach() method executes a provided function once for each array element.


// map (returns NEW ARRAY OF SAME LENGHT WITH ALTERED ITEMS)
const three = [1, 2, 3];
const doubled = three.map (function(item){
    return item * 2;
});
console.log(doubled);
// The map() method creates a new array of the same lenght, populated with the results of calling a provided function on every element in the calling array (three).


// filter (returns NEW ARRAY WITH FILTERED ITEMS)
const numbers = [1, 2, 3, 4];
const evens = numbers.filter (function (item) {
    return item % 2 === 0;
});
console.log(evens);
// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


// reduce (returns SINGLE OUTPUT VALUE [ex: total])
const sum = [1, 2, 3].reduce (function (accumulator, currentNumber) {
    return accumulator + currentNumber;
},0);
console.log(sum);
// reduce is run against an array of numbers, each number is added to the 'accumulator' (a total)
// as the function goes over the array, each number is added to the accumulator
// the number at the end (0) is the initial value of the accumulator/total.


// some (returns BOOLEAN)
const hasNegativeNumbers = [1, 2, 3, -3, 4, -1].some (function (number) {
    return number < 0;
});
console.log(hasNegativeNumbers)
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.


// every (returns BOOLEAN)
const allPositiveNumbers = [1, 2, 3, -3, 4, -1].every (function (number) {
    return number > 0;
});
console.log(allPositiveNumbers);
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.


// find (returns VALUE found or undefined if not found)
const objects = [{ id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundObject = objects.find (function (object) {
    return object.id === 'b';
});
console.log (foundObject)
// The find() method returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfies the testing function, undefined is returned.


// findIndex (returns INDEX)
const objects2 = [{ id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects2.findIndex (function (object) {
    return object.id === 'b';
});
console.log (foundIndex)
// The findIndex() method returns the index of the first element in the array that satisfies the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.


// sort (returns SORTED ARRAY)
const array1 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array1); // expected output: Array [1, 100000, 21, 30, 4]
// The sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending.