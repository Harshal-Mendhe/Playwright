/*
let arr1  = [1, ,4,5,6]
console.log(arr1.length);
console.log(arr1[14]);
for(let i : number = 0; i<=arr1.length ; i++){
    const value = arr1[i];
    
    if (value != undefined && value %2 == 0){
        console.log('value ' + value);
    }
}

//Reverse an array
let items : number[] = [1,2,3,4,5];
//let reversedItem = 
items.reverse();

console.log(items);

let name : string[] = ["My", "Name", "is", "Harshal"];
let joined = name.join(" ");
console.log(joined);


let a = [1,2,3,4];
let b = ["Hello", "World"];

let concat : (string | number)[] = [...a,...b];

Array.prototype.push.apply(a,b);

console.log(typeof(a) + ' a= '+a)

//Splicing Array

let arr2 = [1,2,13,14,5];
arr2.splice(2,2,3,4);   
console.log(arr2);    //arr2 = [1,2,3,4,5]

*/

let x: any = 10;
let y : string = '10';

console.log(x===y);
console.log(x==y);

