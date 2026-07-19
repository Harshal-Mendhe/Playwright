let Object ={
    name : "Harshal",
    age : 25,
    speak:function(){
        console.log( `${this.name} can speak Marathi only`);
    }
}

console.log(Object.name);
console.log(Object["age"]);
Object.speak();
Object["speak"]();

let Person : {
    name: string,
    age : number,
    isAlive : boolean,
    speak: ()=> string,
} = {
    name : "Harshal",
    age : 25,
    isAlive : true,

    speak : function(): string {
        if(this.isAlive === true){
            return `${this.name} is still alive and is now ${this.age} years old`;
        }
        else{
            return "null";
        }
    },


}

console.log(Person.name);
console.log(Person.age);
Person.speak();

type Book = {
    authorName : string;
    category : string;
    noOfPages : number;
}

let book1 : Book = {
    authorName : "Harshal", 
    category : "Autobiography",
    noOfPages: 2
}

console.log(`${book1.authorName} has written ${book1.category} of ${book1.noOfPages} pages.`)