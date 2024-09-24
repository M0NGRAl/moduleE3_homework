function getter(a, b){
    let array = []
    for (i = a; i <= b; i++){
        array.push(i)
    }
    console.log(array)
}


setInterval(getter, 1, 2, 6);