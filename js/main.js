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
        var street = prompt("Do you know the street really well... YES or NO?").toUpperCase()
        if (fast === "YES" && street === "YES") {
            console.log("Good job!, the monster couldn't catch ya!!")
            }else if ((fast === "YES") || (street === "YES")) {
                console.log("the monster almost got you,, you are a lucky one..")
                }else if (fast === "NO" && street === "NO"){
                    console.log("What where you thinking... the monster is eating you                                  by now")
                    } else{
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

        // the default case is to re ask the qus..
        default :
        console.log ("Please try again choose from with in this works fight, run, act                          didn't see")
    
    
    }
