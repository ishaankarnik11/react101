let a = [1,2,3,4];
let newA = [...a, 5,6,7,8];

let obj = {
    a: 1,
    b:2,
    c:3
}

let newObj = { ...obj, d:4};

let funcA = (...args)=>{
    return args.sort();
}

console.log(funcA(5,2,100));

