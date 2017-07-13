function cipher(word, offset){
  alphabet = "abcdefghijklmnopqrstuvwxyz"
  word = word.split("")
  answer = [];
  for(var i = 0; i < 4; i++){
    index = alphabet.indexOf(word[i])
    answer[i] = alphabet[index + offset];
    
  }
  answer = answer.join("");
  console.log(answer);
}

cipher("word", 3)