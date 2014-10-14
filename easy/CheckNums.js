function CheckNums(num1,num2) {
  if(num1 < num2) {
    return "true";
  } else if(num1 > num2) {
    return "false";
  }

  return "-1";
}

CheckNums(readline());
