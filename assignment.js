// Part 1: Strings and String Methods
// Task 1: String Manipulation

var sent = "JavaScript is a powerfull and popular programming language" // Declaring String variable snetence

console.log(sent.toUpperCase()); // Converting String to UpperCase
console.log(sent.toLowerCase()); // Converting String to LowerCase
console.log(sent.indexOf("popular")) // Finding the index of a word in a string
console.log(sent.slice(16,24)); // Slicing a word from a string
console.log(sent.replace("JavaScript" , "JS")); // Replacing a word in a string
console.log(sent.includes("language")); // Checking if a word is present in a string


// Part 2: Arrays and Array Methods
// Task 2: Array Operations

const fruits = ["Apple" , "Banana" , "Mango" , "Orange" , "Grapes"]; // Declaring an array of fruits

console.log(fruits); // Displaying the array of fruits
console.log(fruits.push("Pineapple") , fruits); // Adding an element to the end of the array
console.log(fruits.pop() , fruits); // Removing an element from the end of the array
console.log(fruits.splice(1,0, "Strawberry") , fruits); // Adding an element to the middle of the array
console.log(fruits.indexOf("Mango")); // Finding the index of an element in the array
console.log(fruits.splice(3,1) , fruits); // Removing an element from the middle of the array
console.log(fruits.sort()); // Removing an element from the start of the array
console.log(fruits.reverse()); // Reversing the array

// Part 3: Object Constructor Function
// Task 3: Creating and Using a Constructor Function

function Person(nm, a, gend, name){
    this.name = nm;
    this.age = a;
    this.gender = gend;
    this.greet = function(name){
        console.log("Hello, I am "+ this.name);
    };

// Bonus Task 1: Adding a method to check if the person is an adult
    this.isAdult = function(){
        if(this.age >= 18){
            console.log("I am an adult");
        }
        else{
            console.log("I am not an adult");
        }
};
}

var person1 = new Person("Sufyaan" , "20" , "Male");
var person2 = new Person("Madani" , "18" , "Male");
var person3 = new Person("Hafeez" , "17" , "Male");

console.log(person1);
console.log(person1.greet());
console.log(person1.isAdult());
console.log(person2);
console.log(person2.greet());
console.log(person2.isAdult());
console.log(person3); 
console.log(person3.greet());
console.log(person3.isAdult());

// Bonus Task 2: Adding a method to create an array of people



// Part 4: Object Manipulation and Nested Object Access
// Task 4: Object Manipulation


// Creating an object of a car with properties and methods

function Car(brnd, mdl, yr){
    this.brand = brnd;
    this.model = mdl;
    this.year = yr;
    this.features = ["AC", "Sunroof", "Bluetooth"];
};

var car1 = new Car("Toyota" , "Fortuner" , "2019");
var car2 = new Car("Suzuki" , "Swift" , "2008") ;
var car3 = new Car("Honda" , "City" , "2011");

// Adding features to the car objects
car1.features.push("Alloy Rims");
car2.features.push("Power Windows");
car3.features.push("Power Steering");

// Updating the year of the car objects
car1.year = "2020";
car2.year = "2010";
car3.year = "2015";

// Deleting the Model property of the car object
delete car1.model;
delete car2.model;
delete car3.model;

// Displaying the updated car objects
console.log(car1);
console.log(car2);
console.log(car3);


// // Task 5: Accessing Nested Objects in an Array

// Creating an array of students containing multiple objects like name, age and grades
var students = [
    {
        name: "Sufyaan",
        age: 20,
        grades : {maths: 90, english: 80, science: 85}
    },
    {
        name: "Madani",
        age: 20,
        grades : {maths: 80, english: 85, science: 90}
    },
    {
        name: "Hafeez",
        age: 20,
        grades : {maths: 85, english: 90, science: 80}
    }
]

// Displaying the array of students
console.log(students);

// Accessing the science grade of the second student
console.log(students[1].grades.science); 

// Adding a new subject and grade to the third student
students[2].grades.history = 75;
console.log(students);