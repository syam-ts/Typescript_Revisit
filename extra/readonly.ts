// #readonly property lets you lock an entity , so you cant modify it - just read only

type Person = {
    name: string;
    readonly email: string;
    readonly mobile: number;
    place: string;
};

const person: Person = {
    name: "Syam",
    email: "Syamnandhu3@gmail.com",
    mobile: 8848700346,
    place: "Kollam",
};

person.name = "Sunil";

//person.email = "Sunilcantdoemail.com"; //ERROR: email is readonly property

// #2 'AS CONST' - behave like const and readonly - useful for non-primitive type (even with const)

const RGB = ["red", "green", "blue"] as const;
//RGB.push('yellow') // ERROR: RGB is readonly now by using 'as const'

let superman = "Henry Cavil" as const;
// superman = 'Christopher reeves' // more strict

type Config = {
    apiUrl: string;
    timeout: number;
    debug: string;
};

const importConfig = (config: Readonly<Config>) => {
    
    // config.apiUrl = 'new one' // cannot do that ,bcuz it is readonly
    return config;
};
