// Challenge 3: Rock, Paper, Scissors.
function rpsGame(yourChoice){
console.log(yourChoice)
var humanChoice, botChoice;
humanChoice= yourChoice.id
botChoice= numberToChoice(randToRpsInt())
console.log("Comp Choice is "+botChoice)
results = decideWinner(humanChoice,botChoice)
console.log(results)

message = finalMessage(results)
console.log(message)
rpsFrontEnd(yourChoice.id, botChoice,message);
}

function randToRpsInt(){
    return  Math.floor(Math.random()*3)
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number]
}



function decideWinner(yourChoice, compChoice){
    rpsDatabase={
        'rock':{'scissors':1, 'rock':0.5, 'paper':0},
        'paper':{ 'rock':1,'paper':0.5, 'scissors':0 },
        'scissors':{'paper':1, 'scissors':0.5, 'rock':0, },
    }


var yourScore = rpsDatabase[yourChoice][compChoice]
var compScore =rpsDatabase[compChoice][yourChoice]
return [yourScore,compScore]
}

function finalMessage([yourScore,compScore]){
    if(yourScore===0){
       return{'message':'LOSERRR! BOOYAAH! IN YOUR FACE!!!', 'color':'red'};
    } else if(yourScore===0.5){
        return{'message':'DRAAAWW!!! BORIING!!', 'color':'black'};
    } else{
        return{'message':'WINNER🎁🎁!!!RESPECT!!', 'color':'purple'};
    }
}

function rpsFrontEnd(humanImageChoice, botImageChoice,finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove()
    document.getElementById('paper').remove()
    document.getElementById('scissors').remove()

    var humanDiv= document.createElement('div')
    var messageDiv= document.createElement('div')
    var botDiv= document.createElement('div')
  

    humanDiv.innerHTML = "<img src='"+ imagesDatabase[humanImageChoice] + "' style:'box-shadow: 0 10px 50px #f80b95;'>"
    document.getElementById('rps-flexbox').appendChild(humanDiv)

    messageDiv.innerHTML = "<h1 style='color:" + finalMessage['color']+";font-size:30px;padding:30px; '>"+finalMessage['message']+"</h1>"
    document.getElementById('rps-flexbox').appendChild(messageDiv)


    botDiv.innerHTML = "<img src='"+ imagesDatabase[botImageChoice] + "'style:'box-shadow:0px 10px 50px rgb(111, 111, 228);'>"
    document.getElementById('rps-flexbox').appendChild(botDiv)

   
};
