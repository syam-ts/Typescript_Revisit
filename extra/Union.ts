//use the pipe symbol( | ) to allow you to specify that a value can be one of these types

type UserId = number | string;

const userId: UserId = "user_27";

const userIdTwo: UserId = 27;

//# Literal values using Unions (you can pass default values to a variable to make it solid)

let frontend: "react.js" | "next.js" | "vue.js" | "three.js";
frontend = "react.js";

//Type narrowing

const getDetails = (userId: number | string, name: string) => {
    // narrowing the type for specific behaviour
    if (typeof userId === "string") {
        console.log("String Type ", name);
    } else {
        console.log("Number Type ", name);
    }
};

type movie = 'tarzen' | 'avatar' | 'titanic'

type year = 1994 | 1555 | 2009;

type newOne = `new ${movie} ${year}`


 
 