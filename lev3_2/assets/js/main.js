let 
numArr = [5, 22, 15, 100, 55];

numArr.forEach((elm) => {

    for(let i = 2; i < elm; i++){

        if(elm % i === 0){
            let result = elm / i;
            document.write(`${elm} lässt sich durch ${i} teilen! Das Ergebnis ist ${result}<br>`)
        }
    }
});
