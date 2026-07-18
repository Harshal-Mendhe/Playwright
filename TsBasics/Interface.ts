interface Person{
    name: string,
    age: number,
    readonly skinTone : string
}

let harry : Person ={
    name : "Harshal",
    age : 25,
    skinTone : "Black"
}

harry.name = "Harry";
console.log(harry.name);

// harry.skinTone = "White";  -- NOT POSSIBLE

interface children extends Person{
    favCartoon : string,
    schoolName : string
}

let bachhu : children ={
    name : "Sandy",
    age : 4,
    skinTone : "White",
    favCartoon : "Shinchan",
    schoolName: "Apostolic"
}

interface Person2{
    name: string,
    age: number,
    readonly skinTone : string
}

interface Person3 extends Person, Person2{
    salary : number
}

let h : Person3 ={
    name : "",
    age : 4,
    skinTone :"",
    salary : 3
}