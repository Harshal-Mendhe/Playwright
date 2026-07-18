class Car{

    name: string;
    color: string;
    model: string;

    constructor(name: string,color: string,model: string){
        this.name = name;
        this.color = color;
        this.model = model;
    }

    start(){
        console.log("I am starting");
    }

    stop(){
        console.log("Break applied");
    }
}

class BMW extends Car{
    yOfManu : number;

    constructor(name: string,color: string,model: string, yOfManu: number){
        super(name, color, model);
        this.yOfManu = yOfManu;
    }

    start(){
        console.log("Vroom Vroom")
    }

    stop(){
        console.log("BMW stopped")
    }

}

const newCar = new Car("Q1","Red","500");

const bmw = new BMW("Q1","Red","500",1304);

bmw.start();

console.log(bmw.name);

//SUPER (CONSTRUCTOR AND METHODS ONLY)

/**
USING SUPER() WE CAN INVOKE PARENT CONSTRUCTOR
USING SUPER() WE CAN INVOKE PARENT CLASS MENTHODS 
BUT WE CANNOT INVOKE PARENT CLASS PROPERTIES IN TS (CAN BE DONE IN JAVA)
 */

