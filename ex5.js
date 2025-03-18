const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

    const prixtotal= products.map(n=>n.price)
                             .reduce((acc,n)=>acc+n,0);
console.log(prixtotal);