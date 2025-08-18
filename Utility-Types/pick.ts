// #helps to pick only the needed properties from and object

type Userss = {
    _id: string;
    name: string;
    email: string;
    password: string;
    mobile: number;
    age: number;
    isEmployed: boolean;
    createdAt: Date;
};

type UserInfo = Pick<Userss, "name" | "age" | "mobile">; // this new type only need to have these much props

const user: UserInfo = {
    name: "syam",
    age: 27,
    mobile: 8848700346,
};
