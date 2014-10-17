function ExOh(str) { 
  var diff = 0;
  
  for(var i = 0; i < str.length; i++) {
    if(str[i] == 'x')
      diff++;
    else if(str[i] == 'o') {
      diff--;
    }
  }
  
  return diff == 0;
}

ExOh(readline());
