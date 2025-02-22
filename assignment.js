function Person(nm, a, gend, name){
    this.name = nm;
    this.age = a;
    this.gender = gend;
    this.greet = function(name){
        console.log("Hello, I am "+ this.name);
    };
};

var person1 = new Person("Sufyaan" , "20" , "Male");
var person2 = new Person("Madani" , "20" , "Male");
var person3 = new Person("Hafeez" , "20" , "Male");

// console.log(person1);
// console.log(person2);
// console.log(person3); 




function Car(brnd, mdl, yr){
    this.brand = brnd;
    this.model = mdl;
    this.year = yr;
    this.features = ["AC", "Power Steering", "Power Windows"];

    Car.features= "Sunroof", "Airbags";

};


var car1 = new Car("Toyota" , "Fortuner" , "2019");
var car2 = new Car("Suzuki" , "Swift" , "2019");
var car3 = new Car("Honda" , "City" , "2019");

console.log(car1);
console.log(car2);
console.log(car3);
