const counter = (x, n) =>{
    let result = x
    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result;
}

const result = counter(5, 3)
console.log(result)