
//# The con with interface is compared to type is - it can override same interface

interface User {
    name: string;
    email: string;
    age: number;
    place: string;
}

interface User {
    // with type you can't redeclare same type - which make it more strict
    name: string;
    isUser: boolean;
}
