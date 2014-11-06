function MultiplicativePersistence(num) {
  var persistence = 0;
  var mul;
  
  while(num > 9) {
    mul = 1;
    while(num > 0) {
      mul *= num % 10;
      num = Math.floor(num / 10);
    }
    
    num = mul;
    persistence++;
  }
  
  return persistence;
}

MultiplicativePersistence(readline());
