
// use to creates objects type with set of properties

type Ages = Record<string, number>; // type Ages = { [x: string]: number }

const ages: Ages = {
    Syam: 27,
    Manu: 25,
    Rohith: 26,
    //!!! 34: "Mohith" // won't work , bcuz key should be string and value should be number
};

ages["Sunil"] = 27;
// ages[34] = 'Rahul' -ERROR: need to be string: number

