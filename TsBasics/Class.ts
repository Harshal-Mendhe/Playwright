import console = require("node:console");

class Person{
    firstName:string;
    lastName:string;


    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(){
      return `Hello, I am ${this.firstName} ${this.lastName}`;
    }


}

let person1 = new Person("Harshal", "Mendhe");

console.log(person1.getFullName());

//Read-Only Properties

class readOnly{
    name: string;
    readonly height : number;
    age: number;

    constructor(name: string, height: number, age?: number){
        this.name = name;
        this.height = height;
        
        if(age === undefined){
            throw new Error("Age is required");
        } 

        this.age = age;

    }
}
try {
    let harry = new readOnly("Harshal", 5.7);
} catch (error) {
    //console.log(`${error}`);
    console.log();
    
}

let shri = new readOnly("Shrikant",6.8,21);
