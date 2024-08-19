const button = document.getElementById("convert-btn");
const input = document.getElementById("number");
const result = document.getElementById("output");
function checkInput(){
  if(input.value === ""){
    result.innerText = "Please enter a valid number";
  }
  else if(input.value <= -1){
    result.innerText = "Please enter a number greater than or equal to 1";
  }
  else if(input.value >= 4000){
    result.innerText = "Please enter a number less than or equal to 3999";
  }
  else{
    convert(input.value);
  }
}
function convert(num){
  var numerals = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1]];
  var results = [];
  numerals.forEach(function(p) {
    while (num >= p[1]) {
      results.push(p[0]);
      num -= p[1];
    }
  });
  result.innerText =  results.join('');
}
button.addEventListener("click", checkInput);
