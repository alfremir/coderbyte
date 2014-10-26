function ArithGeo(arr) {
  var arith = true;
  var geo = true;
  var diff = arr[1] - arr[0];
  var ratio = arr[1] / arr[0];
  
  for(var i = 2; i < arr.length; i++) {
    if(arr[i] - arr[i-1] != diff) {
      arith = false;
    }
    
    if(arr[i] / arr[i-1] != ratio) {
      geo = false;
    }
  }
  
  if(arith) {
    return 'Arithmetic';
  } else if(geo) {
    return 'Geometric';
  }
  
  return -1;
}
  
ArithGeo(readline());
