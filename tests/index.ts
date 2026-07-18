console.log('Hello, World!');

let age: number = 42;
console.log(`The value of age is: ${age}`);

var valueDouble = 8.892;

var valueInt = valueDouble | 0;
console.log(`The value of valueInt is: ${valueInt}`);

var str = '12345';

var strInt = +str;
console.log(strInt + 111111);

console.log(11/0 - Infinity);

var alphNumeric = 'abc123';
var alphaNumeric2 = '123abc45';

var nums = alphNumeric.replace(/\D/g, '');
var nums2 = parseInt(alphaNumeric2); // ParseInt will parse only the leading numeric characters and ignore the rest


console.log(`The value of nums is: ${nums}`);
console.log(`The value of nums2 is: ${nums2}`);

var a = 9;
let b;


//var sum = a + b;

console.log(b);


var c = 9;

c = 86;

var c = 89;

console.log(`The value of c is: ${c}`);

let am, bm, cm, dm;

am = bm = cm = dm = 9;

//for-in

const WorkDays : { [key: string]: number } ={
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4
}

for (const day in WorkDays) {
    console.log(`The value of ${day} is : ${WorkDays[day as keyof typeof WorkDays]}`);
}

//for-of



const nonWorkDays =[
    "Monday",
    "Friday",
    "Saturday",
    "Sunday"
]

for (const day of nonWorkDays) {
    console.log(day);
}