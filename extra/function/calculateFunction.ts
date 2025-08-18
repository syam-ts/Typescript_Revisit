
// #arrow function
const calculateTotal = (
    price: number,
    quantity: number,
    discount: number
): number => {
    return price * quantity * (1 - discount);
};


//regular function
function calculateTotalReg(
    price: number,
    quantity: number,
    discount: number
): number {
    return price * quantity * (1 - discount);
}


//void return
const calculateTotalVoid = (
    price: number,
    quantity: number,
    discount: number
): void => {
    console.log(price * quantity * (1 - discount)); // noting returning = void
};


// type inffer(implicit) is bad - always explicit params & return type
