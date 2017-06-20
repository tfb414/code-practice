def longestWord (str):
  longestWord = 0
  str = str.split(" ")
  for x in str:
    if len(x) > longestWord:
      longestWord = len(x)

  print(longestWord)
  return longestWord

longestWord("derp1 derp23 derp333")
