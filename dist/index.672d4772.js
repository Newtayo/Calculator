(function() {
    let holder = document.querySelector(".container");
    let firstNumber = "";
    let secondNumber = "";
    let placeHolder = "";
    holder.addEventListener("click", function(event) {
        buttonClick(event.target.innerText);
        event.stopPropagation();
    });
    function buttonClick(value) {
        if (isNaN(parseInt(value))) handleSymbol(value);
        else handleNumber(value);
    //console.log(value);
    }
    function handleSymbol(value) {
        if (value === "=") {
            console.log("equal");
            handleCalculation();
        }
        let val = document.querySelector(".display").innerHTML;
        placeHolder = value;
        switch(placeHolder){
            case "+":
            case "−":
            case "\xd7":
            case "\xf7":
                let val1 = document.querySelector(".display").innerHTML;
                firstNumber = val1;
                document.querySelector(".display").innerHTML = "";
                break;
            case "←":
                let clar = document.querySelector(".display").innerHTML;
                console.log(clar.length);
                if (clar.length === 1) document.querySelector(".display").innerHTML = "0";
                else {
                    let newArray = [
                        ""
                    ];
                    let myArray = clar.split("");
                    for(let i = 0; i < myArray.length - 1; i++)newArray += myArray[i];
                    document.querySelector(".display").innerHTML = newArray;
                }
                break;
            case "C":
                document.querySelector(".display").innerHTML = "";
                break;
        }
    }
    function handleNumber(value) {
        if (document.querySelector(".display").innerHTML === "0") {
            let val = value;
            document.querySelector(".display").innerHTML = val;
        } else {
            let val1 = value;
            document.querySelector(".display").insertAdjacentText("beforeend", val1);
        }
    }
    function handleCalculation() {
        let need = parseFloat(document.querySelector(".display").innerHTML);
        secondNumber = need;
        switch(placeHolder){
            case "+":
                let add = parseInt(firstNumber) + parseInt(secondNumber);
                document.querySelector(".display").innerHTML = add;
                break;
            case "−":
                let minus = parseInt(firstNumber) - parseInt(secondNumber);
                document.querySelector(".display").innerHTML = minus;
                break;
            case "\xd7":
                let times = parseInt(firstNumber) * parseInt(secondNumber);
                document.querySelector(".display").innerHTML = times;
                break;
            case "\xf7":
                let divide = parseInt(firstNumber) / parseInt(secondNumber);
                document.querySelector(".display").innerHTML = divide;
                break;
        }
    }
})();

//# sourceMappingURL=index.672d4772.js.map
