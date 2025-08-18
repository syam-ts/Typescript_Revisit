
// #using a general type can be provided to multiple area - useful when you dont want to specify certian type

var pair = <A, B>(a: A[], b: B[]): [A, B][] => {
    // A and B can be dynamic type
    const array: [A, B][] = [];

    for (let i = 0; i < a.length && b.length; i++) {
        array.push([a[i], b[i]]);
    }

    return array;
};

pair([1, 2, 3], [["a", "b", "c"]]); // automatically filled the given type to it




// *generic constants - a way to extend generic to more type

type Email = {
    email: string;
};

var pluckEmail = <T extends Email>(arr: T[]) => {
    // <T extends string> will also works the same
    return arr.map((ar) => ar.email);
};

pluckEmail([{ name: "Syam", email: "syamnandhu3@gmail.com", age: 27 }]); // email is specified to just string




// Used with inteface or type
type IUser<T extends Email> = {
    name: T;
    age: number;
    place: T;
    hobbies: T[];
};
 