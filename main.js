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

// start.addEventListener("change",(event) => {
//     let startvalue
//     startvalue = event.target.value
    
// });

// end.addEventListener("change",(event) => {
//     endValue = event.target.value
// });

// type.addEventListener('change', (event) => {
//     // const result = document.querySelector('.result');
//     // result.textContent = `You like ${event.target.value}`;
//     typeValue = event.target.value
// });
btn.addEventListener('click', (event) => {
    even.innerText = "Trang chẵn: "
    odd.innerText = "Trang lẻ: "

    
    startvalue = start.value
    endValue = end.value
    typeValue = type.value
    
    if(typeValue == 1){
        for(let i = parseInt(startvalue); i <= parseInt(endValue); i++) {
            // if(typeValue === 1) {
            //     odd.innerText = i+","
            // }else if (typeValue === 2) {
            //     even.in
            // }
            if(i%2 == 0) {
                even.innerText += i+","
            }else{
                odd.innerText += i+","
            }
        }
    }else if(typeValue == 2){
        for(let i = parseInt(endValue); i >= parseInt(startvalue); i--) {
            // if(typeValue === 1) {
            //     odd.innerText = i+","
            // }else if (typeValue === 2) {
            //     even.in
            // }
            if(i%2 == 0) {
                even.innerText += i+","
            }else{
                odd.innerText += i+","
            }
        }
    }
    
    
});

