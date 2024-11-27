/*
* it is a mechanism in which one object acquires all the properties and behaviors of parent object.
*
* Inheritance is a mechanism in which a new class is created (derived class)
*  that inherits the properties of an existing class (base class).
*
* let's see an example
* */

class Animal {
    // @ts-ignore
    #name: string;
    // @ts-ignore
    #color: string;

    constructor(name: string, color: string) {
        this.#name = name;
        this.#color = color;
    }

    getAnimalDetails() {
        return `Name: ${this.#name}, Color: ${this.#color}`;
    }

}

class Dog extends Animal {
    breed: string;

    constructor(name: string, color: string, breed: string) {
        super(name, color);
        this.breed = breed;
    }

}

class Cat extends Animal {
    breed: string;

    constructor(name: string, color: string, breed: string) {
        super(name, color);
        this.breed = breed;
    }

}

const dog1 = new Dog('Tommy', 'Black', 'German Shepherd');
const cat1 = new Cat('Tom', 'White', 'Persian');

console.log(dog1.getAnimalDetails());
console.log(cat1.getAnimalDetails());




