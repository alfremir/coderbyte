# Have the function LetterCapitalize(str) take the str parameter being passed 
# and capitalize the first letter of each word. Words will be separated by 
# only one space.
def LetterCapitalize(str)
  str = str.scan(/\w+/)
    
  str.each do |word|
    word.capitalize!
  end
              
  return str.join(" ")       
end

# keep this function call here
LetterCapitalize(STDIN.gets)
