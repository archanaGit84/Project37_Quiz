class Question{
    constructor(){
        this.title = createElement('h1')
        this.input1 = createInput("Enter Your Name");
        this.input2 = createInput("Enter Option Number");
        this.question = createElement('h3');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');
        this.button = createButton('Submit');
        
    }

    hide(){
        
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
    }

    display(){
        this.title.html("Quiz");
        this.title.position(width/2-10, 20);

        this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
        this.question.position(width/6, 80);
        this.option1.html("1: Everyone " );
        this.option1.position(width/6, 110);
        this.option2.html("2: Envelope" );
        this.option2.position(width/6, 130);
        this.option3.html("3: Estimate " );
        this.option3.position(width/6, 150);
        this.option4.html("4: Example" );
        this.option4.position(width/6, 170);

        this.input1.position(150, 230);
        this.input2.position(350, 230);
        this.button.position(290, 300);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            contestant.name = this.input1.value();
            contestant.choice = this.input2.value();
            count+=1;
            contestant.index = count;
            contestant.update();
            contestant.updateCount(count);
          });
    }
}