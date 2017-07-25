

function findIndexOfVowel(word){
    var vowel = ['a', 'e', 'i', 'o', 'u'];
    // for (index in word){
    //     if(word.indexOf(vowel[index]) == 0){
    //         indices.push(word.indexOf(vowel[index]));
    //     }
        
        //check the first letter then log it if it is a vowel, 
        // then chop off it. Check the next one, then chop
    // }
    // console.log(indices);
    // console.log(word.match(/[aeyiuo]+$/g))
    var regex = /[a]+$/gi, result, indices = [];
    while ( (result = regex.exec(word)) ) {
        indices.push(result.index);
    }

    console.log(indices);
    return indices;
    
//i could also regex just the vowel's index
    
}

findIndexOfVowel("aabce");

if(typeof module !== "undefined"){
    module.exports = {
        findIndexOfVowel
    }
}