/*encapsulation*/

/*
* Encapsulation is an another important feature of OOPs.
* It is the mechanism that binds together the code and the data it manipulates,
* and keeps both safe from outside interference and misuse.
* kono class er kono property ke private kore dile oi property ke oi class er baire theke access kora jabe na.
*
* lets see an example
* */

class Employee {
    name: string;
    phone: number;
    designation: string;
    about: string;
    // @ts-ignore
    #shortBio: string;

    constructor(name: string, phone: number, designation: string, about: string) {
        this.name = name;
        this.phone = phone;
        this.designation = designation;
        this.about = about;

        this.#shortBio = `Name: ${this.name}, Phone: ${this.phone}`;
    }

    // setter method

    setShortBio(shortBio: string) {
        this.#shortBio = shortBio;
    }

    getEmployeeDetails() {
        return `Name: ${this.name}, Phone: ${this.phone}, Designation: ${this.designation}, About: ${this.about}`;
    }

    getShortBio() {
        return this.#shortBio;
    }
}

const partho = new Employee('Partho', 1234567890, 'Software Engineer', 'I am a software engineer');

console.log(partho.getEmployeeDetails());
partho.setShortBio('Name: anik, Phone: 1234567890');
console.log(partho.getShortBio());
