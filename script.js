const inputElement = document.getElementById("number");
const convertButton = document.getElementById("convert-btn");
const output = document.getElementById("output");
const numeralArray = [
  ["M", 1000],
  ["CM", 900],
  ["D", 500],
  ["CD", 400],
  ["C", 100],
  ["XC", 90],
  ["L", 50],
  ["XL", 40],
  ["X", 10],
  ["IX", 9],
  ["V", 5],
  ["IV", 4],
  ["I", 1]
]

const checkInput = () => {
  output.innerText = "";
  if(inputElement.value === ""){
    output.innerText = "Please enter a valid number";
  }
  if(inputElement.value < 0){
    output.innerText = "Please enter a number greater than or equal to 1";
  }
  else if(inputElement.value >= 4000){
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else{
    convertNumber(inputElement.value);
  }
}
const convertNumber = (number) => {
  for(let i=0; i<numeralArray.length; i++){
    while(number >= numeralArray[i][1]){
      number -= numeralArray[i][1];
      output.innerText += numeralArray[i][0];
    }
  }
}

convertButton.addEventListener("click", checkInput);
