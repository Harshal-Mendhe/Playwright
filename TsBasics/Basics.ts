/*
let a = 10;

a = 'Ten';

console.log(a); 
node Basics.ts // This will print output as Ten, even after getting compile time error

--THEREFORE, IT IS NOT RECOMMENDED TO RUN .ts FILE USING node KEYWORD---
*/

/*
let a : number= 10;

a = 'Ten';

console.log(a);
tsx Basics.ts  // This will give compile time error and code will not run
*/

/*
console.log("age:",6);

function addNumbers(...num:number[]){
    let i:number;
    let sum: number = 0;

    for(i = 0; i<num.length; i++){
        sum= sum + num[i];
    }

    console.log(sum);
}

addNumbers(1,2,3,4,5);

console.log("--------------------");

function addElements(...ele:(number | string)[]){
    let sum: (number | string);

    for (let i: number = 0; i < ele.length; i++) {
        sum = sum +  ele[i];
    }

    console.log(sum);

}

addElements();

*/
/*
function person(name: string, age: number, mob?: number) {
    console.log(`Hello ${name} your age is ${age}`);
}


function abc(a: number, b: string, callback:(name: string, age: number) => void){
    console.log(a,b);
    callback("Harshal",25);
}

abc(8,"Harshal",person);

*/
/*
function sum(a: number, b: number){
    result(a+b);
}

function result(r:number){
    console.log(r);
}

sum(2,7);
*/
/*
function add(a: number, b: number): string;
function add(a: string, b: string): string;

function add(a:(number | string),b:(number | string)):string{
    if(typeof(a)=== "number" && typeof(b) === "number"){
        let c = a+b;
        return a.toString() + b.toString();
    }
    else{
        return (a + " " + b);
    }
}

let c = add("Hello", "Harshal");
let d = add(13,87);

console.log(c);
console.log(d);

function cont(a: string, b: string): void{
    let c = a+b;
}

*/

function diff(): string;
function diff(a:number): number;

function diff(a?:number): (number | string){

    if(a!==undefined){
        return `Hello ${a}`;
    }
    else{
        return "Hello";
    }
}

console.log(diff(7));
console.log(diff());