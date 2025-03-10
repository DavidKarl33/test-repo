// create a arr , create a temp to hold the reversed arr 
// for loop i = length of the array ; as long as length of array is >= 0 ; length --
// arr = temp
let arr = [1,3,4,6,7,8];
let temp =[];
for(let i = arr.length -1; i >= 0; i--){
    temp.push(arr[i]);
}
arr=temp;
console.log(arr);