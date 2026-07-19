/*
let arr1: number[] = [1,90,3,4,6];
let arr2: Array<string> = ["Harshal", "Mendhe"];


// for in takes the index from the start
for(let i in arr1){
    console.log(arr1[i]);
}


// for of for similar to for-each (java)
for(let val of arr2){
    console.log(val);
}

function filterEven(a:number[]): number[]{
    let b: number[] = [];
    
    for (let ele of a){
        if(ele%2 === 0){
            b.push(ele);
        }
    }

    return b;
}



let orig: number[] = [1,2,3,4,5,6,7,8];
console.log(filterEven(orig));

*/
/*
let fruits:[number, string][] = [[1,"Apple"],[2,"Banana"],[3,"Chiku"]];

let fruit = fruits[2];

if(fruit!== undefined){
    console.log(fruit[0]);
}

let strArr: string[] = ["H","e","l","l","o"];
console.log(strArr);

let str: string = strArr.toString();
console.log(str);

let strReg = str.replaceAll(',','');
let strReg2 = str.replace(/,/g,'');
console.log(strReg);
console.log(strReg2);

*/

// ForEach function



let sports: string[] = ["Cricket", "TT", "Soccer","Badminton"];

/*
sports.forEach((priority,spName)=>{
    console.log(`${spName} has priority ${priority}`);
})

*/
let sp1 = sports.filter((spname)=>{

    if(spname !== undefined && spname?.length > 6){
        return spname;
    }
}
)

console.log(sp1);


let num: number[] = [1,2,3,4,5,16];

let sqrNum = num.map((element)=>{
    return (element * element);
}
)

console.log(sqrNum);

let sum = num.reduce((s, element)=>{
    return s+element;
})

console.log(`sum: ${sum}`);

let singleDigit = num.some(num=>{
    return (num > 10);
})

console.log(singleDigit);