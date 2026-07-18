class Person{
    age = 24

    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    fullName(){
        console.log(this.firstName + this.lastName)
    }


}



let person = new Person('Harshal', 'Mendhe')
//console.log(person.age)
console.log(person.fullName())