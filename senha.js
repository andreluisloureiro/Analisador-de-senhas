var input = document.getElementById('input')
var pbDiv = document.getElementById("pbDiv")
var box = document.getElementsByClassName("box")
var fasolid = document.getElementsByClassName("fa-solid")
var p = document.getElementsByClassName("p")

var typingTimer
input.addEventListener('keyup', () => {
    clearTimeout(typingTimer);
    if (input.value) {
        typingTimer = setTimeout(check, 700);
    }
});

var eye = document.getElementsByClassName("eye")[0];
eye.addEventListener("click", eyeAnim)
function eyeAnim() {
    eye.classList.toggle("anim")
    if (input.type === "text") {
        input.type = "password";
    } else {
        input.type = "text"
    }
}

input.addEventListener("keydown", (event) => {
    if (event.key === "Backspace" || "Control") {
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


function check() {
    let introDiv = element = document.getElementsByClassName("introDiv")[0]
    let imageIntro = element = document.getElementsByClassName("imageIntro")[0]
    var text = input.value
    if (text.length === 0) {
        colors([0, 0, 0, 0, 0])
        removeClasses()
        introDiv.classList.remove("anim")
        imageIntro.classList.remove("anim")
    } else {
        for (var i = 0; i < 5; i++) {
            box[i].classList.add("appear")
            fasolid[i].classList.add("appear")
            p[i].classList.add("appear")
        }
        imageIntro.classList.add("anim")
        introDiv.classList.add("anim")
        console.log(introDiv)
        var lessThanEight = /^.{0,7}$/
        var numbers = /[0-9]/;
        var upper = /[A-Z]/;
        var lower = /[a-z]/;
        var special = /(?:.*[\W]){1}/;
        var special2 = /(?:.*[\W]){2}/;
        var fourteen = /^.{14,}$/;
        var easterEgg = /^Abaixo uma senha para ser analisada por um site estático e sem banco de dados./g

        var tests = [numbers,upper,lower,special,special2,fourteen]
        var array = []
        if (lessThanEight.test(text) === true) {
            array.push(0)
            textChange("Uma boa senha tem pelo menos 8 caracteres.")
        } else {
            array.push(1)
            for (var i = 0; i < 6; i++){
                if (tests[i].test(text) === true){
                    array.push(1)
                }else{
                    array.push(0)
                }
            }
        }

        colors(array)
        if (array[1] === 0) {
            textChange("Tente adicionar números em sua senha")
        } else {
            if (array[2] === 0) {
                textChange("Tente adicionar letras maiúsculas em sua senha")
            } else {
                if (array[3] === 0) {
                    textChange("Tente adicionar letras minúsculas em sua senha")
                } else {
                    if (array[4] === 0) {
                        textChange("Tente adicionar Caracteres Especiais")
                    } else {
                        if (array[1] === 1 && array[2] === 1 && array[3] === 1 && array[4] === 1) {
                            if (array[5] === 0){
                                textChange("Sua senha preenche os requisitos mínimos de qualidade. Para maior segurança é recomendável usar mais um caractere especial.")
                            }else{
                                if (array[6] === 0){
                                    textChange("Sua senha ficaria mais complexa com 14 caracteres ou mais")
                                }else{
                                    textChange("Sua senha é ótima.")
                                }
                            }                         
                         }
                    }
                }
            }
        }
    }
}

function colors(w) {
    const sum = w.reduce((partialSum, a) => partialSum + a, 0);
    var classList = pbDiv.classList
    while (classList.length > 1) {
        classList.remove(classList.item(1))
    }
    
    if (sum === 2) {
        pbDiv.classList.add("ten")
    } else if (sum === 3) {
        pbDiv.classList.add("thirty")
    } else if (sum >= 4 && w[1] === 0 || sum >= 4 && w[2] === 0 || sum >= 4 && w[3] === 0 || sum >= 4 && w[4] === 0) {
        pbDiv.classList.add("forty")
    } else if (sum >= 4 && w[1] === 1 && w[2] === 1 && w[3] === 1 && w[4] === 1) {
        if (sum === 5){
            pbDiv.classList.add("fifty")
        }else if (sum === 6){
            pbDiv.classList.add("sixty")
        }else{
            pbDiv.classList.add("eighty")
        }
    }

    for (var i = 0; i < 5; i++) {
        if (w[i] === 1) {
            box[i].classList.add("green")
            fasolid[i].classList.add("green")
            p[i].classList.add("green")
        } else {
            box[i].classList.remove("green")
            fasolid[i].classList.remove("green")
            p[i].classList.remove("green")
        }
    }
}


function textChange(feedBack) {
    var element = document.getElementById("feedBack")
    typingTimer3 = setTimeout(timer, 05)
    function timer() {
        if (feedBack != element.innerHTML) {
            element.classList.remove("appear")
            typingTimer3 = setTimeout(timer, 600)
            function timer() {
                element.innerHTML = feedBack
                element.classList.add("appear")
            }
        } else {
            element.classList.add("appear")
        }
    }
}


function removeClasses() {
    let introDiv = element = document.getElementsByClassName("feedBack")[0]
    console.log()
    pbDiv.classList.add("zero")
    typingTimer3 = setTimeout(erase, 100)
    function erase() {
        var element = document.getElementById("feedBack")
        element.classList.remove("appear")
        element.classList.remove("easterEgg")
    }
    for (var i = 0; i < 5; i++) {
        box[i].classList.remove("appear")
        fasolid[i].classList.remove("appear")
        p[i].classList.remove("appear")
    }
}
