
//variables
const result = document.getElementById('result')
const num1 = document.getElementById('1')
const num2 = document.getElementById('2')
const num3 = document.getElementById('3')
const num4 = document.getElementById('4')
const num5 = document.getElementById('5')
const num6 = document.getElementById('6')
const num7 = document.getElementById('7')
const num8 = document.getElementById('8')
const num9 = document.getElementById('9')
const num0 = document.getElementById('0')
const add = document.getElementById('add')
const subtract = document.getElementById('subtract')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const percent = document.getElementById('percent')
const clear = document.getElementById('clear')
const deletebutton = document.getElementById('delete')
const decimal = document.getElementById('decimal')
const equals = document.getElementById('equals')
const textequation = document.getElementById('textequation')
let equation = ''




num1.addEventListener('click', () => {
  equation += '1';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}

    textequation.textContent = equation.toString();





})

num2.addEventListener('click', () => {
  equation += '2';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})


num3.addEventListener('click', () => {
  equation += '3';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num4.addEventListener('click', () => {
  equation += '4';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num5.addEventListener('click', () => {
  equation += '5';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num6.addEventListener('click', () => {
  equation += '6';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num7.addEventListener('click', () => {
  equation += '7';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num8.addEventListener('click', () => {
  equation += '8';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num9.addEventListener('click', () => {
  equation += '9';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

num0.addEventListener('click', () => {
  equation += '0';
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}

    textequation.textContent = equation.toString();





})





subtract.addEventListener('click', () => {
  equation += '-' ;
  console.log(equation);
  
  textequation.textContent = equation.toString();
  



})


add.addEventListener('click', () => {
  equation += '+' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


    textequation.textContent = equation.toString();



})

multiply.addEventListener('click', () => {
  equation += 'x' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


    textequation.textContent = equation.toString();  



})

divide.addEventListener('click', () => {
  equation += '/' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


    textequation.textContent = equation.toString();


})

decimal.addEventListener('click', () => {
  equation += '.' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  
    textequation.textContent = equation.toString();


})

percent.addEventListener('click', () => {
  equation += '%' ;
  console.log(equation);
  
  



    textequation.textContent = equation.toString();

})

deletebutton.addEventListener('click', () => {

  equation = '' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})

clear.addEventListener('click', () => {

  equation = '' ;
  console.log(equation);
  
  //if(equation > 1){
    //equation += -1 
    //equation += 10 ** (equation + 1)
    //console.log(equation)}


  textequation.textContent = equation.toString();



})



equals.addEventListener('click', () => {
  try {
    // Replace 'x' with '*' for multiplication and '%' with '/100' for percentage
    const formattedEquation = equation.replace(/x/g, '*').replace(/%/g, '/100');
    
    // Evaluate the equation
    const resultValue = eval(formattedEquation);
    
    // Display the result
    result.textContent = resultValue.toString();
    console.log(resultValue);
    
    // Update the equation to the result for further calculations
    equation = resultValue.toString();
    textequation.textContent = equation;
  } catch (error) {
    console.error("Error in equation:", error);
    result.textContent = "Error";
  }
});




























































































