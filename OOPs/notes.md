# JavaScript and Classes:-
It is important to note that JavaScript is a prototype-based language, and its classes are primarily syntactic sugar over existing prototype-based inheritance mechanism. Example of a JavaScript class:

``` javascript
class Student{
    constructor(name, roll){
        this.name = name;
        this.roll = roll;
    }
    sayHello() {
        console.log(`Hello ${this.name}! Your roll is: ${this.roll}`);
    }
 }

 let student1 = new Student('Ayan', '13');
 student1.sayHello();   //output: Hello Ayan! Your roll is: 13
 
 ```

 ## OOP: A programming Paradime. An object is a collection of properties(variables) and methods(functions).

## Parts of Object Oriented Programming:
-> Object Literal (actual object)
-> Constructor functions
-> new, this keywords
-> Prototypes
-> classes

## 4 pillars of OOPs:
-> Abstraction | Inheritance | Polymorphism | Encapsulation