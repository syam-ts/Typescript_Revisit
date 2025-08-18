//Q. class Person [pro: [name, age, place, email, mobile], methods: [getname, getplace ,findDob] ]

interface IPerson {
    name: string;
    email: string;
    age: number;
    place: string;
    mobile: number;
    getName(): string;
    getPlace(): string;
    findDob(): number;
}

interface ICustomer {
    firstName: string;
    lastName: string;
    getFullName(): string;
    purchase(cost: number): number;
}

class Persons implements IPerson {

    name: string;
    email: string;
    age: number;
    place: string;
    mobile: number;

    constructor(
        name: string,
        email: string,
        age: number,
        place: string,
        mobile: number
    ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.place = place;
        this.mobile = mobile;
    }

    getName(): string {
        if (this.name === undefined) return "not exist";
        return this.name;
    }

    getPlace(): string {
        if (this.place === undefined) return "not exist";

        return this.place;
    }

    findDob(): number {
        const currentDate = new Date().getFullYear;

        return Number(currentDate) - this.age;
    }
}

class Constomer implements ICustomer {

    firstName: string;
    lastName: string;
    private balance: number; // Private property here

    constructor(firstName: string, lastName: string, balance: number) {
        (this.firstName = firstName), (this.lastName = lastName);
        this.balance = balance;
    }

    getFullName(): string {
        return this.firstName + this.lastName;
    }

    purchase(cost: number): number {
        return this.balance - cost;
    }
}

// # Abstract class

abstract class Shapes {  // cannot create an instance - only use for extends

    size: "small" | "medium" | "large";

    constructor(size: "small" | "medium" | "large") {
        this.size = size;
    }

    abstract calculateArea(): number;
    displayArea(): void {
        console.log(`The area of the shape is ${this.calculateArea}`);
    }
}

interface ICircle {
    radius: number;
    calculateArea(): number;
}

interface IShapeDetails {
    getShapeDetials(shape: string): void;
}

class Circle extends Shapes implements ICircle, IShapeDetails {
    
    radius: number;

    constructor(size: "small" | "medium" | "large") {
        super(size);
        if (size === "small") {
            this.radius = 5;
        } else if (size === "medium") {
            this.radius = 10;
        } else {
            this.radius = 15;
        }
    }

    calculateArea(): number {
        return Math.PI * this.radius ** 2;
    }

    getShapeDetials(shape: string): void {
        console.log(`The shape is ${shape}`);
    }
}

const circle = new Circle("medium");

circle.displayArea(); // displays area
circle.getShapeDetials("circle");
