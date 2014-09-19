function LongestWord(sen) { 
  var words = sen.split(/[^A-Za-z]/);
  var longest = "";
  
  for(var i = 0; i < words.length; i++) {
    if(words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest; 
         
}
   
LongestWord(readline());
