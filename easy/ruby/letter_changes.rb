# Using the Ruby language, have the function LetterChanges(str) take the str 
# parameter being passed and modify it using the following algorithm. Replace 
# every letter in the string with the letter following it in the alphabet (ie. 
# c becomes d, z becomes a). Then capitalize every vowel in this new string 
# (a, e, i, o, u) and finally return this modified string.
def LetterChanges(str)
  str = str.split("")
    
  str.each do |c|
    c.next! if c =~ /[a-z]/
    c.upcase! if c =~ /[aeiou]/
  end
                  
  return str.join
end
                       
# keep this function call here 
LetterChanges(STDIN.gets)
