function MeanMode(arr) {
  var counts = {};
  var mean = 0;
  var mode;
  
  for(var i = 0; i < arr.length; i++) {
    counts[arr[i]]++;
    mean += arr[i];
  }
  
  mean /= arr.length;
  mode = arr[0];
  
  for(var key in counts) {
    if(counts[key] > counts[mode])
      mode = key;
  }
  
  return mode == mean ? 1 : 0;
}

MeanMode(readline());
