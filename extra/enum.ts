// #d   set of constants for an entity

enum StatusCode {
    Ok = 200,
    Created = 201,
    UnAuthurized = 401,
    NotFound = 404,
}

// !!! the main con is : it will create a bundle when convert to js
//  which is unessassary - this is why enums are avoided most of the times
