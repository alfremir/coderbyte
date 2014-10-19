function Palindrome(str) {
  var i = 0;
  var j = str.length - 1;

  while(i < j) {
    if(str[i] != str[j])
      return false;

    do {
      i++;
    } while(i < str.length && str[i] == ' ');

    do {
      j--;
    } while(j >= 0 && str[j] == ' ');
  }

  return true;
}

Palindrome(readline());
