# Have the function SecondGreatLow(arr) take the array of numbers stored in 
# arr and return the second lowest and second greatest numbers, respectively, 
# separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the 
# output should be 12 98. The array will not be empty and will contain at 
# least 2 numbers. It can get tricky if there's just two numbers!
def SecondGreatLow(arr)
  arr.sort!
  i = 1
  j = arr.length - 2
        
  i += 1 while i < arr.length && arr[0] == arr[i]
  j -= 1 while j >= 0 && arr[j] == arr[arr.length - 1]
                
  return "#{arr[0]} #{arr[0]}" if j < 0
  
  return "#{arr[i]} #{arr[j]}"   
end

# keep this function call here 
SecondGreatLow(STDIN.gets)
