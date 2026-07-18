let person = {
    firstName : 'Harshal',
    lastName : 'Mendhe',
    age : 24,
    fullName : function(){
        console.log(this.firstName +  this.lastName)
    }
}

//console.log(person.age);
//Add new property
person.plays = 'Cricket';

//Delete property
delete person.age;

//console.log('NetWorth' in person);

console.log(person.fullName());
