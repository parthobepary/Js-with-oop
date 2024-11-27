/*
* it is a way to hide the implementation details and show only the necessary features of an object.
*
* Abstraction is a way to hide the implementation details and show only the necessary features of an object.
*
* In other words, it helps to reduce programming complexity and effort.
*
* Let's see an example
* */

class MyArray {

    // @ts-ignore
    #array: number[] = [];

    constructor(array: number[]) {
        this.#array = array;
    }

    addElement(element: number) {
        this.#array.push(element);
    }

    removeElement(element: number) {
        this.#array = this.#array.filter(item => item !== element);
    }

    getArray() {
        return this.#array;
    }
}

const array = new MyArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
array.addElement(11);

console.log(array.getArray());