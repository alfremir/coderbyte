function SwapCase(str) {
  var chars = str.split('');

  for(var i = 0; i < chars.length; i++) {
    if(chars[i] == chars[i].toUpperCase()) {
      chars[i] = chars[i].toLowerCase();
    } else {
      chars[i] = chars[i].toUpperCase();
    }
  }

  return chars.join('');
}

SwapCase(readline());
