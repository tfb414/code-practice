function testIt(){
    console.log("it works")
    return "it works";
}

if(typeof module !== "undefined"){
    module.exports = {
        testIt: testIt,
    }
}


