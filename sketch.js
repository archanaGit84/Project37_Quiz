
var database;
var gameState = 0;
var count;
var quiz, contestant, question,allContestants;

function preload(){
  
}

function setup() {
  createCanvas(800,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  if(gameState === 0){
    console.log("Hi")
    quiz.begin();
  }
  
 
}

function draw() {
 background('grey')

 if(count === 4){
  quiz.updateState(1)
 }

 if(gameState === 1){
    quiz.results();
 }
}

