let userscore = 0;
let computerscore = 0;
const choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let cont = document.querySelector(".msg-container");
const userscorepara = document.querySelector("#user-score");
const computerscorepara = document.querySelector("#comp-score");
const gencompchoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userwin,userchoice,compchoice) =>{
    if(userwin){
        userscore++;
        userscorepara.innerText = userscore;
        // console.log("you win");
        msg.innerText = `YOU WINNNN!!! ${userchoice} BEATS  ${compchoice}`;
        msg.style.backgroundColor = "green";

    }
    else{
        computerscore++;
        computerscorepara.innerText = computerscore;
        // console.log("you lose");
        msg.innerText = `YOU LOSEE ^ ^ ${compchoice} BEATS  ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}
const drawgame = () =>{
    // console.log("game was draw");
    msg.innerText = "DRAWW!!"
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}
const playgame = (userchoice) =>{
    console.log("user choice is",userchoice);
    const compchoice = gencompchoice();
    // console.log("comp choice ",compchoice);
    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
        userwin  =   compchoice === "paper" ?false:true;     
        }
        else if(userchoice === "paper"){
           userwin = compchoice === "scissors" ? false :true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice,compchoice);
    }

}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice = choice.getAttribute("id");
        // console.log("clicked",userchoice);
        playgame(userchoice);
    });
});


