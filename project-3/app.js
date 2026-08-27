let gameSeq=[];
let userSeq=[];

let started=false;
let level = 0;
let btns=["red","yellow","green","purple"];
let h3=document.querySelector("h3");

document.addEventListener("click",function(){
    if(started==false){
        console.log("game is started")
        started=true;

        levelUp();
    }
    
});

function gameFlash(btn){
    btn.classList.add("flash");
    
    setTimeout(function(){
        btn.classList.remove("flash")
    },250);
}
function userFlash(btn){
    btn.classList.add("userflash");
    
    setTimeout(function(){
        btn.classList.remove("userflash")
    },250);
}

function levelUp(){
    level++;

    let h3=document.querySelector("h3");
    h3.innerText = `Level${level}`;

    // random button choose
    let randIdx=Math.floor(Math.random()*4);
    let randColor = btns[randIdx];

    let randBtn=document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash( randBtn);
};

function checkAns(){
    console.log("curr level:",level);
    let idx = level- 1;

    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length ==gameSeq.length){
            setTimeout(levelUp,1000)
        }
        console.log("same value");
    }else{
        h3.innerHTML = `Game Over!Your score was <b>${level}</b> <br> Press any key to start`
        
        document.querySelector("body").style.backgroundColor ="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor ="white";
        },150);
        reset();
    }

}

function btnPress(){
    console.log(this)
    let btn = this;
    userFlash(btn);

    userColor= btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress)
}