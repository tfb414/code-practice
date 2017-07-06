function sortIt(number){
    list = number.toString().split("");
    list = list.sort(function(a,b) {return a-b}).reverse();
    list = Number(list.join(""));
    return list;
    
}

sortIt(12012312312315363451);

