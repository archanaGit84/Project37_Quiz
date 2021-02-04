class Quiz{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", (data)=> {
            gameState = data.val();
            console.log(gameState)
        });
        

    }

    begin(){
        contestant = new Contestant();
        contestant.getCount();
        question = new Question();
        question.display();

    }

    updateState(state){

        database.ref('/').update({
              gameState: state
        });
          
    }

    results(){
        question.hide();
        background("teal");
        textSize(20);
        fill("black")
        text("Result",340, 50);
        
        Contestant.getContestantInfo();
        if(allContestants !== undefined){
          
          var posY = 230;
        
       
          for(var i in allContestants){
            
                var rightChoice = "2";
                if (rightChoice == allContestants[i].choice)
                fill("green")
                else
                fill("red");
        
                posY += 30;
                
                text(allContestants[i].name + ": " + allContestants[i].choice, 250,posY)
          }
        }
    }


}