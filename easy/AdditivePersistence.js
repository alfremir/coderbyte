function AdditivePersistence(num) {
  var persistence = 0;
  var sum;
  
  while(num > 9) {
    sum = 0;
    
    while(num > 0) {
      sum += num % 10;
      num /= 10;
    }
    
    num = sum;
    persistence++;
  }
  
  return persistence;
}

AdditivePersistence(readline());
