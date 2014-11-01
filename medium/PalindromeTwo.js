function PalindromeTwo(str) {
  str = str.toLowerCase();
  var i = 0;
  var j = str.length - 1;
  
  while(!str[i].match(/[a-z]/i))
    i++;
  
  while(!str[j].match(/[a-z]/i))
    j--;
  
  while(i < j) {
    if(str[i] != str[j])
      return 'false';
    
    do {
      i++;
    } while(!str[i].match(/[a-z]/i));
    
    do {
      j--;
    } while(!str[j].match(/[a-z]/i));
  }
  
  return 'true';
}

PalindromeTwo(readline());
