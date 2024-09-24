function func1(arg1){
    return function(arg){
        return (arg + arg1)
    }
}

const test = func1(3)
console.log(test(1))