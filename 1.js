function counter(array){
    let counter1 = 0,
        counter2 = 0,
        counter3 = 0
    for (let i = 0; i < array.length; i++){
        if (typeof(array[i]) === 'number'){
            if (isNaN(array[i])){
                continue
            }
            else if (array[i] === 0){
                counter3++
                continue
            }
            else if (array[i] % 2 === 0){
                counter1++
                continue
            }
            else if (array[i] % 2 !== 0){
                counter2++
                continue
            }

        }
    }
    console.log('четные -',(counter1), 'нечетнве -', counter2, '0 -', counter3)
}

let qwe = [1, 2, 'e', 0, 2]
counter(qwe)