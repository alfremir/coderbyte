function PowersofTwo(num) {
  if((num - 1) & num) {
    return 'false';
  } else {
    return 'true';
  }
}

PowersofTwo(readline());
