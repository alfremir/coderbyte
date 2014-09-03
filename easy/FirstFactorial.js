function FirstFactorial(num) { 
  var result = 1;
  
  while(num > 0) {
    result *= num;
    num--;
  }

  return result; 
}
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
