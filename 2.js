function simple(a){
    if (a > 1000 || a === 0 || a === 1){
        return 'Данные не верны'
    }
    else {
        for (let i = 2; i < a; i++) {
            if (a % i === 0) {
                return 'Не простое число'
            }
        }
        return 'Просто число'
    }
}


console.log(simple(1200))