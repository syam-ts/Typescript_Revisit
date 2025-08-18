// # adding multiple types to new type by using '&'

type Country = {
    name: string;
    area: number;
    IsIndependent: boolean;
};

type People = {
    population: number;
};

type MyCountry = Country & People; //this one will have all properties of Country and People


type Main= {
    name: string
}

interface Main2 {
name: string
}

interface Main2 {
    age: number
}

