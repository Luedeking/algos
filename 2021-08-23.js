// This question is asked by Apple. Given an array of numbers, move all zeroes in the array to the end while maintaining the relative order of the other numbers.
// Note: You must modify the array you’re given (i.e. you cannot create a new array).
// Ex: Given the following array nums…
// nums = [3, 7, 0, 5, 0, 2], rearrange nums to look like the following [3,7,5,2,0,0]

function MoveZeroes (array) {
    var switchValue = 0;

    for (var i=0;i<array.length-1;i++){
        if (array[i] === 0){
            for (var j=i;j<array.length-1;j++){
                switchValue = array[j];
                array[j] = array[j+1];
                array[j+1] = switchValue;
            }
        }
    }

    return array;
}

var nums = [3, 7, 0, 5, 0, 2];

console.log(MoveZeroes(nums));