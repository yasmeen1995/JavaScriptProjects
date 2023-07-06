/*
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

let billTotalInputEl = document.getElementById("billTotalInput")
let tipInputEl = document.getElementById("tipInput")
let numberOfPeopleEl = document.getElementById("numberOfPeople")
let perPersonTotalEl = document.getElementById("perPersonTotal")


// Get number of people from number of people div

let people = Number(numberOfPeopleEl.innerText)
console.log(people)

// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    let bill = Number(billTotalInputEl.value)
    // console.log('billing: ', bill)
  
    // get the tip from user & convert it into a percentage (divide by 100)
    let tipPercent = (Number(tipInputEl.value)/100)
  
    // get the total tip amount
    let tipAmount = bill * tipPercent
  
    // calculate the total (tip amount + bill)
    let total = bill + tipAmount
  
    // calculate the per person total (total divided by number of people)
    perPerson = total/people
  
    // update the perPersonTotal on DOM & show it to user
    perPersonTotal.innerText = `$${perPerson.toFixed(2)}`
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
    people +=1
  
    // update the DOM with the new number of people
    numberOfPeopleEl.innerText = people
  
    // calculate the bill based on the new number of people
    calculateBill()
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
    if (people <= 1) {
      return
    }
    
    // decrement the amount of people
    people -= 1
  
  
    // update the DOM with the new number of people
    numberOfPeopleEl.innerText = people
  
    // calculate the bill based on the new number of people
    calculateBill()
  }