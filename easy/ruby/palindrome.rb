# Have the function Palindrome(str) take the str parameter being passed and 
# return the string true if the parameter is a palindrome, (the string is the 
# same forward as it is backward) otherwise return the string false. For 
# example: "racecar" is also "racecar" backwards. Punctuation and numbers will 
# not be part of the string.
def Palindrome(str)
  str = str.gsub(" ", "")
  front = 0
  back = str.length - 1
        
  while front < back
    if str[front] != str[back]
      return "false"
    end
    front += 1
    back -= 1
  end
                                    
  return "true"
end
                                                  
# keep this function call here 
Palindrome(STDIN.gets)     
