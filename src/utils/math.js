export const formatPrice = (price) => {
    return Number.parseFloat(price.toString().replace(/,/g, '.')).toFixed(2);
};
