function FirstFactorial(num) { 
  var result = 1;
  
  while(num > 0) {
    result *= num;
    num--;
  }

  return result; 
}
   
FirstFactorial(readline());
