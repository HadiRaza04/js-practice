const nums = [1, 2, 3, 6];

const sumNums = nums.reduce( (acc, curr) => acc + curr, 0);
console.log(sumNums); // 12

const shoppingCart = [
    {
        itemName: "js Course",
        price: "2999"
    },
    {
        itemName: "py Course",
        price: "3999"
    },
    {
        itemName: "mobile dev Course",
        price: "9999"
    },
    {
        itemName: "data science Course",
        price: "12999"
    }
]
const priceToPay = shoppingCart.reduce( (acc, item) => acc + Number(item.price), 0);
console.log(priceToPay); // 29996

const yourPrice = shoppingCart.reduce( (acc, curr) => acc + Number(curr.price), 0)
console.log(`Your price is: ${yourPrice}. Your total price with include of Rs: 90 tax  is Rs: ${yourPrice + 10}.`);
// Your price is: 29996. Your total price with include of Rs: 90 tax  is Rs: 30006.
