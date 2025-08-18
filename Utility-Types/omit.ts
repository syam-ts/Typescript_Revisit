
// #helps to omit the reffred properties from and object
// opposits to Pick<>

type Usero = {
    _id: string;
    name: string;
    email: string;
    password: string;
    mobile: number; 
    createdAt: string;
};

type UserCredentials = Omit<Usero, "name" | "email" | "mobile" > // this new type omit the given properties; 

const userCredenticals: UserCredentials = {
    _id: "user033",
    password: "usersecretpass",
    createdAt: "2025-02-12",
};
