# Using the Ruby language, have the function FirstFactorial(num) take the num 
# parameter being passed and return the factorial of it. 
def FirstFactorial(num)
  result = 1
  
  while num > 1
    result *= num
    num -= 1
  end
                    
  return result
end
                         
# keep this function call here 
FirstFactorial(STDIN.gets)
