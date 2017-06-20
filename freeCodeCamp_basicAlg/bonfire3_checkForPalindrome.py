import re

def checkForPalindrome (str):
  str = str.lower()
  # str = str.replace(" ", "", 5)
  str = re.sub("\s+|\*|\-|\.|\,|\#|\:|\_", "", str)
  backwards = str[::-1]


  print(str)
  print(backwards)
  if str == backwards:
    print("true")
    return true
  else:
    print("false")
    return false


checkForPalindrome ("A man, a plan, a ca:#nal. Panama")


# re.sub(pattern, repl, string[, count, flags])
