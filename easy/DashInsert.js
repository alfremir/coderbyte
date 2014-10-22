function DashInsert(num) {
  if(num < 10)
    return String(num);

  var current;
  var result = [num % 10];
  num = Math.floor(num / 10);

  while(num > 0) {
    current = num % 10;
    num = Math.floor(num / 10);
    if(result[0] % 2 == 1 && current % 2 == 1) {
      result.unshift('-');
    }
    result.unshift(current);
  }

  return result.join('');
}

DashInsert(readline());
