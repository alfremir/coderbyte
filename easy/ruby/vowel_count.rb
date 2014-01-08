# Have the function VowelCount(str) take the str string parameter being passed 
# and return the number of vowels the string contains (ie. "All cows eat 
# grass" would return 5). Do not count y as a vowel for this challenge.
def VowelCount(str)
  count = 0
    
  str.each_char do |c|
    count += 1 if c =~ /[aeiou]/
  end
              
  return count
end
                   
# keep this function call here 
VowelCount(STDIN.gets)
