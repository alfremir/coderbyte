function Division(num1,num2) {
  var r;

  while(num2 != 0) {
    r = num1 % num2;
    num1 = num2;
    num2 = r;
  }

  return num1;
}

Division(readline());
