
type CalculateTotalType = (
    price: number,
    quantity: number,
    discount: number
) => number; // type alias for calculatetotal function


const calculateTotalType: CalculateTotalType = (
    price: number,
    quantity: number,
    discount: number
): number => {
    return price * quantity * (1 - discount);
};
