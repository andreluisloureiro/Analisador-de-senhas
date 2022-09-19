var input = document.getElementById('input')
var pbDiv = document.getElementById("pbDiv")

var typingTimer
input.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (input.value) {
        typingTimer = setTimeout(delay, 700);
    }
});


input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace") {
        typingTimer2 = setTimeout(removeBackspace, 700);
        function removeBackspace() {
            if (input.value === "") {
                check()
            } else {
                return
            }
        }
    }
})

input.addEventListener("keydown", (event) => {
    if (event.key === "Control") {
        typingTimer3 = setTimeout(removeBackspace, 0);
        function removeBackspace() {
            if (input.value === "") {
                check()
            } else {
                return
            }
        }
    }
})


input.addEventListener("keydown", (event) => {
    if (event.key === " ") {
        return false;
    }
})


function delay() {
    progressBarAppears()
}

function progressBarAppears() {
    if (input.value === "") {
        pbDiv.classList.remove("aparecer")
    } else if (input.value != "") {
        check()
    }
}

function check() {
    var element = document.getElementById("feedBack")
    var text = input.value
    removeClasses()
    function removeClasses() {
    pbDiv.classList.remove("thirty")
    pbDiv.classList.remove("twenty")
    pbDiv.classList.remove("five")
    pbDiv.classList.remove("ten")
    pbDiv.classList.remove("forty")
    pbDiv.classList.remove("sixty")
    pbDiv.classList.remove("fifty")
    pbDiv.classList.remove("fifteen")
    pbDiv.classList.remove("eighty")
    pbDiv.classList.remove("ninety")
    pbDiv.classList.remove("oneHundred") 
    element.classList.remove("appear")   
    element.classList.remove("easterEgg") 
    }
    var space = /\s/
    var lessThanEight = /^[0-9a-zA-Z\d@$!%¨*?&#()"'¨-]{1,7}$/
    var justNumbersOver8 = /^[0-9]{8,}$/;
    var justLettersOver8 = /^[A-Za-z]{8,}$/;
    var justSpecialOver8 = /^[@$!%¨*?&#()"'¨-]{7,}$/;
    var numbersAndLowerCase = /^(?=.*[a-z])(?=.*\d)[a-z\d]{8,}$/;
    var numbersAndUpperCase = /^(?=.*[A-Z])(?=.*\d)[A-Z\d]{8,}$/;
    var numbersUpperLower = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var numbersLowerSpecial = /^(?=.*[a-z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%¨*?&#()"'¨-])[a-za-z\d@$!%¨*?&#()"'¨-]{8,}$/;
    var numbersUpperSpecial = /^(?=.*[A-Z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%¨*?&#()"'¨-])[A-ZA-Z\d@$!%¨*?&#()"'¨-]{8,}$/;
    var numbersSpecial = /^(?=.*\d)(?=.*[@$!%¨*?&#()"'¨-])[\d@$!%¨*?&#()"'¨-]{8,}$/;
    var UpperSpecial = /^(?=.*[A-Z])(?=.*)(?=.*[@$!%¨*?&#()"'¨-])[A-Z@$!%¨*?&#()"'¨-]{8,}$/;
    var LowerSpecial = /^(?=.*[a-z])(?=.*)(?=.*[@$!%¨*?&#()"'¨-])[a-z@$!%¨*?&#()"'¨-]{8,}$/;
    var UpperLowerSpecial = /^(?=.*[A-Z])(?=.*[a-z])(?=.*)(?=.*[@$!%¨*?&#()"'¨-])[A-Za-z@$!%¨*?&#()"'¨-]{8,}$/;
    var numbersUpper2Special = /a/;
    var numbersLower2Special = /a/;
    var LessThanTwelve = /^[0-9a-zA-Z\d@$!%¨*?&#()"'¨-]{1,11}$/
    var LessThanEighteen = /^[0-9a-zA-Z\d@$!%¨*?&#()"'¨-]{1,17}$/
    var numbersUpperLowerSpecial = /^(?=.{8})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?:[a-zA-z\d]*[@$!%¨*?&#()"'¨-]){1}[a-zA-Z\d]*$/;
    var numbersUpperLower2Special = /^(?=.{8})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?:[a-zA-z\d]*[@$!%¨*?&#()"'¨-]){2}[a-zA-Z\d@$!%¨*?&#()"'¨-]*$/
    var numbersUpperLower2Special12 = /^(?=.{11})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?:[a-zA-z\d]*[@$!%¨*?&#()"'¨-]){2}[a-zA-Z\d@$!%¨*?&#()"'¨-]*$/;
    var numbersUpperLower2Special18 = /^(?=.{17})(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?:[a-zA-z\d]*[@$!%¨*?&#()"'¨-]){2}[a-zA-Z\d@$!%¨*?&#()"'¨-]*$/;
    var easterEgg = /^Abaixo uma senha para ser analisada por um site estático e sem banco de dados./g
    if (lessThanEight.test(text) === true) {
        pbDiv.classList.add("five")
        textChange("Sua senha poderia ser maior.")
    } else if (justLettersOver8.test(text) === true) {
        pbDiv.classList.add("ten")
        textChange("É recomendável misturar letras e números na sua senha.")
    }else if (justSpecialOver8.test(text) === true) {
        pbDiv.classList.add("ten")
        textChange("É recomendável misturar letras e números na sua senha.")
    }else if (justNumbersOver8.test(text) === true) {
        pbDiv.classList.add("ten")
        textChange("É recomendável misturar letras e números na sua senha.")
    } else if (numbersAndLowerCase.test(text) === true) {
        pbDiv.classList.add("fifteen")
        textChange("Tente misturar letras Maíusculas e minúsculas em sua senha.")
    } else if (numbersAndUpperCase.test(text) === true) {
        pbDiv.classList.add("fifteen")
        textChange("Tente misturar letras Maíusculas e minúsculas em sua senha.")
    } else if (numbersUpperLower.test(text) === true) {
        pbDiv.classList.add("twenty")
        textChange("Uma boa senha contém pelo menos um caractere especial.")
    } else if (numbersLowerSpecial.test(text) === true | numbersUpperSpecial.test(text)) {
        pbDiv.classList.add("thirty")
        textChange("É recomendável misturar letras Maíusculas e minúsculas.")
    } else if (numbersSpecial.test(text) === true) {
        pbDiv.classList.add("thirty")
        textChange("Adicione letras para aumentar a complexidade da sua senha.")
    } else if (UpperSpecial.test(text) === true || LowerSpecial.test(text) === true) {
        pbDiv.classList.add("thirty")
        textChange("Adicione números para aumentar a complexidade da sua senha.")
    } else if (UpperLowerSpecial.test(text) === true) {
        pbDiv.classList.add("thirty")
        textChange("Adicione números para aumentar a complexidade da sua senha.")
    } else if (numbersUpperLowerSpecial.test(text) === true) {
        pbDiv.classList.add("forty")
        textChange("Sua senha já é razoável, mas mais um caractere especial aumentaria sua complexidade.")
    } else if (numbersUpperLower2Special.test(text) === true && LessThanTwelve.test(text)) {
        pbDiv.classList.add("sixty")
        textChange("Bela senha! Mas com 12 caracteres ficaria ainda melhor!")
    }else if (numbersUpperLower2Special12.test(text) === true && LessThanEighteen.test(text)) {
        pbDiv.classList.add("eighty")
        textChange("Sua senha é incrível! A única forma de melhorar seria com mais caracteres!")
    } else if (numbersUpperLower2Special18.test(text) === true) {
        pbDiv.classList.add("ninety")
        textChange("Parabéns! Sua senha cumpre todos os requerimentos desse site.")
    } else if (space.test(text) === true) {
        if (easterEgg.test(text) === true) {
            pbDiv.classList.add("oneHundred")
            textChange("Você descobriu o Easter Egg. Parabéns!!??!!??!!")
            element.classList.add("easterEgg") 
        } else {
            pbDiv.classList.add("five")
            textChange("Não é recomendável usar espaços em branco na sua senha.")
        }
    } else {
        removeClasses()
    }


    function textChange(feedBack) {
        typingTimer3 = setTimeout(tempo, 05)
        function tempo() {
            if (feedBack != element.innerHTML){
                element.classList.remove("appear") 
                typingTimer3 = setTimeout(tempo3, 500)
                function tempo3(){
                    element.innerHTML = feedBack
                    element.classList.add("appear") 
                }                
            }else{
                element.classList.add("appear") 
            }        
        }        
    }
}



