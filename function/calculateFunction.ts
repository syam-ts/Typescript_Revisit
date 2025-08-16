
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
