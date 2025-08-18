// #when you want to make your entity completely required(not optional) - this is the way Required<Entity>
// opposits to Partial

type UserR = { // type pushing to optional properties
    _id?: string;
    name?: string;
    email?: string;
    age?: number;
    place?: string;
    isEmployed?: boolean;
};

const getUserInfoR = (user: Required<UserR>): string => { // now everything is required 
    
    return `User name is ${user.name}`; // it is madatory to have the properties if it is wrapped with Required
};

// # Required only make top level as optional not the nested items
