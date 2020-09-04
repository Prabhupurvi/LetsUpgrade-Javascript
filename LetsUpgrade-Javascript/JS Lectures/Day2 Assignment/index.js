//1. Program to search for a particular character in a string
let str="beautiful";
console.log("word => "+str);
console.log("a is at index => " + str.indexOf('a'));
console.log("using search func, a found at index => " + str.search('a'));

//2. Program to convert minutes to seconds
let min=4;
let sec=min*60;
console.log(`${min} minuites is equal to ${sec} seconds`);

// 3.Program to search for a element in a array of strings
let arr=["Water","Mountains","Trees","Animals","Rocks"];
console.log("Original array => " + arr);
console.log("Trees is at index => " + arr.indexOf("Trees"));

//4. Program to display only elements containing 'a' in them from a array
function alpha()
{
    let i;
for (i=0;i<arr.length-1;i++){
if(arr[i].includes("a"))
{
console.log(arr[i] +' contains the letter a' )
}
}
}
alpha();

//5. Print an array in reverse order
console.log("original order of the array => "+ arr);
console.log("Reversed order of the array => "+ arr.reverse());


