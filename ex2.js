const fact= (n) => {
    return n === 0 ? 1 : n * fact(n - 1);
};

const transformToFactorials = (mylist) => {
    return mylist.map(fact);
};

const mylist = [1, 3, 4];
console.log(transformToFactorials(mylist)); 
