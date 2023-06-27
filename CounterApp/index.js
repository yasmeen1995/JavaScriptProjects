// document.getElementById("count-el").innerText=5
let count = 0
let countEl= document.getElementById("count-el")
let saveEl= document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerText = count 
    
}

function save() {
    let counterstr = count + ' - '
    saveEl.textContent += counterstr

    count = 0
    countEl.innerText = 0
       
}