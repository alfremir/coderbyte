# Have the function ArithGeo(arr) take the array of numbers stored in arr and 
# return the string "Arithmetic" if the sequence follows an arithmetic pattern 
# or return "Geometric" if it follows a geometric pattern. If the sequence 
# doesn't follow either pattern return -1. An arithmetic sequence is one where 
# the difference between each of the numbers is consistent, where as in a 
# geometric sequence, each term after the first is multiplied by some constant 
# or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: 
# [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be 
# entered, and no array will contain all the same elements.
def ArithGeo(arr)
  difference = arr[1] - arr[0]
  ratio = arr[1] / arr[0]
  arith = true
  geo = true
  i = 2
  while i < arr.length
    if arr[i-1] + difference != arr[i]
      arith = false
    end
    if arr[i-1] * ratio != arr[i]
      geo = false
    end
    i += 1
  end

  if arith
    return "Arithmetic"
  elsif geo
    return "Geometric"
  else
    return "-1"
  end    
end
                                                                     
# keep this function call here 
ArithGeo(STDIN.gets)
