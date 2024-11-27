/*
* it is a concept of OOPs in which a class can have multiple methods with the same name but different parameters.
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

    getName() {
        return this.#name;
    }
    getColor() {
        return this.#color;
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

    getAnimalDetails() {
        return `Name: ${this.getName()}, Color: ${this.getColor()}, 'from polymorphism'`;
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




