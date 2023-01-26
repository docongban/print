let btn = document.getElementById("btn")
let start = document.getElementById("start")
let end = document.getElementById("end")
let type = document.getElementById("type")
let odd = document.getElementById("odd")
let even = document.getElementById("even")

let startvalue
let endValue
let typeValue
let oddValue
let evenValue
let countEven = 0
let countOdd = 0

btn.addEventListener('click', (event) => {
    evenValue = ""
    oddValue = ""
    countEven = 0
    countOdd = 0
    
    startvalue = start.value
    endValue = end.value
    typeValue = type.value
    
    if(typeValue == 1){
        for(let i = parseInt(startvalue); i <= parseInt(endValue); i++) {
            if(i%2 == 0) {
                evenValue += i+","
                countEven ++
            }else{
                oddValue += i+","
                countOdd ++
            }
        }
    }else if(typeValue == 2){
        for(let i = parseInt(endValue); i >= parseInt(startvalue); i--) {
            if(i%2 == 0) {
                evenValue += i+","
                countEven ++
            }else{
                oddValue += i+","
                countOdd ++
            }
        }
    }
    even.innerHTML = `<p class="title-reslut">Trang chẵn(${countEven} trang): <span id="copy-even">Copy</span></p> ${evenValue.slice(0, -1).replace("undefined","")}`
    odd.innerHTML = `<p class="title-reslut">Trang lẻ(${countOdd} trang): <span id="copy-odd">Copy</span></p> ${oddValue.slice(0, -1).replace("undefined","")}`

    let copyEven = document.getElementById("copy-even")
    let copyOdd = document.getElementById("copy-odd")
    copyEven.addEventListener('click', (event) => {
        navigator.clipboard.writeText(evenValue.slice(0, -1).replace("undefined",""))
        // alert("Đã copy: "+evenValue.slice(0, -1).replace("undefined",""))
    })
    
    copyOdd.addEventListener('click', (event) => {
        navigator.clipboard.writeText(oddValue.slice(0, -1).replace("undefined",""))
        // alert("Đã copy: "+oddValue.slice(0, -1).replace("undefined",""))
    })
});

