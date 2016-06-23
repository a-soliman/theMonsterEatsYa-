//the main Qus
var user = prompt("You walk down the street, and out of no where you meet a monster, What would you do.. (fight, run, act didnt see  ?").toUpperCase()


// adding the switch cases
switch (user){
    case 'FIGHT':
        var strong = prompt("are you that strong? YES/NO ?").toUpperCase();
        if(strong === "YES") {
            console.log("Owww, the moster was afraid of you and he decided to runnnn!!")
        }else if (strong === "NO") {
            console.log("not good for you!! the monster broke your head")
            } else {
                console.log("please try again.. write YES or NO")
                }
        break;
    case 'RUN':
        var fast = prompt("Are you fast runner..YES/NO?").toUpperCase();
        if (fast === "YES") {
            console.log("Good job!, the monster couldn't catch ya!!")
            }else if (fast === "NO") {
                console.log("the monster got you,, he will surly eat ya :(")
                }else {
                    console.log("please try again.. write YES or NO")
                    }
        break;
    case "ACT DINDN'T SEE ":
        var canYou = prompt("Can you really do it??..YES/NO?").toUpperCase();
        if (canYou === "YES") {
            console.log("Good job!, the monster pretended he didn't see you too!!")
            }else if (canYou === "NO") {
                console.log("the monster got you,, he is super mad telling can't you see                                  me mother fu**r :(")
                }else {
                    console.log("please try again.. write YES or NO")
                    }
        break;
