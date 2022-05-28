Q:- Difference between forEach, map and filter:-

Ans:-

array = [1, 2, 3, 4, 5]
const first = array.forEach((val, index, list)=>{
    return val;
})

const second = array.map((val, index, list)=>{
    return val;
})

const third = array.filter((val, index, list)=>{
    return val;
})

console.log(third)