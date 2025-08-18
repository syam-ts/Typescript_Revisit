// #using a general type can be provided to multiple area - useful when you dont want to specify certian type
var pair = function (a, b) {
    // A and B can be dynamic type
    var array = [];
    for (var i = 0; i < a.length && b.length; i++) {
        array.push([a[i], b[i]]);
    }
    return array;
};
pair([1, 2, 3], [["a", "b", "c"]]); // automatically filled the given type to it
var pluckEmail = function (arr) {
    // <T extends string> will also works the same
    return arr.map(function (ar) { return ar.email; });
};
pluckEmail([{ name: "Syam", email: "syamnandhu3@gmail.com", age: 27 }]); // email is specified to just string
console.log('uti');
