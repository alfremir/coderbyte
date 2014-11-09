function BinaryConverter(str) {
  var val = 0;
  var mul = 1;
  
  for(var i = str.length - 1; i >= 0; i--) {
    val += Number(str[i]) * mul;
    mul *= 2;
  }
  
  return val;
}

BinaryConverter(readline());
