
var string = "ozu"

function CheckInput(input){
    var log = "";
    var letter;

    for(var i = 0; i<input.length; i++){
        console.log(input[i])
        console.log(log.indexOf(input[i]))
        if(log.indexOf(input[i]) === 0){
            console.log(input[i])
            return "This string contains identical letters"
        }else{
            console.log("Here")
            log += input[i]
        }


    }
    return "This string does not contain identical letters"

}

console.log(CheckInput(string))