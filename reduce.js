const nums = [1, 2, 3, 6];

const sumNums = nums.reduce( (acc, curr) => acc * curr, 1);
// console.log(sumNums);

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
console.log(priceToPay);