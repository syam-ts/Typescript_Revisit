// #when you want to make your entity completely optional - this is the way Partial<Entity>

type Users = {
    _id: string;
    name: string;
    email: string;
    age: number;
    place: string;
    isEmployed: boolean;
};

var getUserInfo = (user: Partial<Users>): string => {  // everything is optional
    if (user.name) {
        return `User name is ${user.name}`;
    }

    return `User name not found`;
};

// # Partial only make top level as optional not the nested items
