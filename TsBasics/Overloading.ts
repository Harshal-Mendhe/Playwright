class Calculator{

    constructor();
    constructor(a: number, b:number);

    constructor(a? : number, b? : number){
        if(a!== undefined && b!== undefined){
            console.log("sum:", a+b);
        }
        else{
            console.log("Nothing to calculate");
        }
    }
}
 
let print = new Calculator();
let sum = new Calculator(3,6);


