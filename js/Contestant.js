class Contestant
{
    constructor(){
        this.name = null;
        this.index = 0;
        this.choice = null;
    }

    getCount(){
        var countRef = database.ref('Count');
        countRef.on("value", (data)=> {
            count = data.val();
            console.log(count)
        });
    }

    update(){
        var contestantsIndex = "Contestants/Contestant" + this.index;
        database.ref(contestantsIndex).set({
            name: this.name,
            choice: this.choice
        })
    }

    updateCount(contestantNumber){
        database.ref('/').update({
            Count:contestantNumber
        });
    }

    static getContestantInfo(){
        var contestantRef = database.ref('Contestants');
        contestantRef.on("value",(data)=>{
          allContestants = data.val();
        })
      }
}