// All inputted elements
var inputName = document.getElementById("inputName")
var inputNumber = document.getElementById("inputNumber")
var inputYear = document.getElementById("inputYear")
var inputMonth = document.getElementById("inputMonth")
var inputCvc = document.getElementById("inputCvc")

// All elements on card
var nameOnCard = document.getElementById("nameOnCard")
var numberOnCard = document.getElementById("numberOnCard")
var yearOnCard = document.getElementById("yearOnCard")
var monthOnCard = document.getElementById("monthOnCard")
var cvcOnCard = document.getElementById("cvcOnCard")

// All errors

var nameError = document.getElementById("nameError")
var numberError = document.getElementById("numberError")
var dateError = document.getElementById("dateError")
var cvcError = document.getElementById("cvcError")


var formDiv = document.getElementById("formDiv")
var submitedDiv = document.getElementById("submitedDiv")

var regexCardNumber = /([0-9]{4})\s([0-9]{4})\s([0-9]{4})\s([0-9]{4})/

const writeToElement = (params) => {
  if (params === "cardNumber") {

    numberOnCard.innerText = inputNumber.value 

    if (inputNumber.value === "") {
      numberOnCard.innerText = "0000 0000 0000 0000";
    }
  }

  if (params === "name") {

    nameOnCard.innerText = inputName.value.toUpperCase()

    if (inputName.value === "") {
      nameOnCard.innerText = "JANE APPLESEED";
    }
  }
  if (params === "month") {

    monthOnCard.innerText = inputMonth.value

    if (inputMonth.value === "") {
      monthOnCard.innerText = "00";
    }
  }
  

  if (params === "year") {

    yearOnCard.innerText = inputYear.value

    if (inputYear.value === "") {
      yearOnCard.innerText = "00";
    }
  }

  if (params === "cvc") {

    cvcOnCard.innerText = inputCvc.value

    if (inputCvc.value === "") {
      cvcOnCard.innerText = "000";
    }
  }
};


const checkCardNumber = (params) => {
  const checkCC = regexCardNumber.test(params)

  return checkCC
}

const submit = () => {
  
  let nameCheck, numberCheck, monthCheck, yearCheck ,cvcCheck; 

  if(inputName.value === "") {
    inputName.classList.add("error")

    nameError.style.display = "block"

    nameCheck = false
  }
  else {
    inputName.classList.remove("error")

    nameError.style.display = "none"

    nameCheck = true

  }

  if(inputNumber.value === "" ) {
    inputNumber.classList.add("error")

    numberError.style.display = "block"

    numberCheck = false
  }
  else {
    inputNumber.classList.remove("error")

    numberError.style.display = "none"    
  
    numberCheck = true
  }

  let checking = checkCardNumber(inputNumber.value)

  if(checking) {
    inputNumber.classList.remove("error")

    numberError.style.display = "none"

    numberCheck = true

  }else {
    inputNumber.classList.add("error")

    numberError.style.display = "block"  

    numberCheck = false

  }

  if(inputMonth.value === "") {
    inputMonth.classList.add("error")

    dateError.style.display = "block"

    monthCheck = false
  }
  else {
    inputMonth.classList.remove("error")

    dateError.style.display = "none"

    monthCheck = true

  }

  if(inputYear.value === "") {
    inputYear.classList.add("error")

    dateError.style.display = "block"

    yearCheck = false
  }
  else {
    inputYear.classList.remove("error")

    dateError.style.direction = "none"
  
    yearCheck = true

  }

  if(inputCvc.value === "") {
    inputCvc.classList.add("error")

    cvcError.style.display = "block"

    cvcCheck = false
  }
  else {
    inputCvc.classList.remove("error")

    cvcError.style.display = "none"

    cvcCheck = true

  }

  if(nameCheck === true && numberCheck === true && monthCheck === true && yearCheck === true && cvcCheck ===true) {
    formDiv.style.display = "none"

    submitedDiv.style.display = "block"
  }

};
