
function blastoffTimerV2(){
    // This line prints to the console on the browser only. 
    console.log("blastoffTimerV2() started");
    var countdownTimer = 10;
    // We had around 72 lines of code. In order to shorten that and be more efficiant 
    // we are going to use the 'for' loop. 
    // The variable starts from zero, it is less than 10 and increments to iterate. 
    for(var i = 0; i < 10; i = i + 1){
        //The loop moves really fast, so we need to set timeout to slow it down.
        setTimeout(function(){
        console.log("countdownTimer");
        // This line attaches the for loop to the designated area in html
        // called, "countdownStatus".
        document.getElementById("countdownStatus").innerHTML = countdownTimer;
        countdownTimer = countdownTimer - 1;
        // Timer waits 1000 miliseconds to decrement. 
        }, 1000 * i)
    }
    // If we want to print anything on a specific number we need the timeout function again
    // Then it will say BlastOff at that specific time, which is the 10th second. 
    setTimeout(function(){
        document.getElementById("countdownStatus").innerHTML = "BlastOff!!!";
        console.log("BlastOff");
    }, 10000)

    }
    
// This is another way of creating a timer. 
// Everything related to the function goes inside the {} curly brackets. 
    function blastoffTimerV3(){
        // This line prints to the console on the browser only. 
        console.log("blastoffTimerV2() started");
        //We have two variables, one that stores 10 and the other that keeps some space for the milliseconds. 
        var countdownTimer = 10;
        var stepTime = 1000;
        // Our for loop is the same except, it uses the name of the variable instead of its value. 
        // If we set countdownTimer to i < countdownTimer, the timer stops at 1. 
        // To have it go to zero it needs one extra digit, so we set i <= countdownTimer.
        for(var i = 0; i <= countdownTimer; i = i + 1){
            //The loop moves really fast, so we need to set timeout to slow it down.
            setTimeout(function(){
                console.log("countdownTimer");
                // if timer is zero print BlastOff. 
                if(countdownTimer == 0){
                    document.getElementById("countdownStatus").innerHTML = "BlastOff!!!";
                    console.log("BlastOff");
                // if there is two 'if' statements we use 'else if' instead.    
                } else if(countdownTimer < 5){
                    document.getElementById("countdownStatus").innerHTML = "Warning Less than 1/2 way to launch, time left = " + countdownTimer;
                    countdownTimer = countdownTimer - 1;
                // else doesn't have a regular bracket. 
                } else {
                    document.getElementById("countdownStatus").innerHTML = countdownTimer;
                    countdownTimer = countdownTimer - 1;
                }
            }, stepTime * i)
        }
        
}
//startFun() disables and enables the start button.
//when start button is clicked it disables it and enables the other button.
function startFun(){
    //this line prints on the browser console.
    console.log("startFun() started")
    //this line connects to start button through the id="startButton"
    //then it disables it.
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}

//The stupFun() stops the start button and enables the stopbutton.
function stopFun(){
    //prints on browser's console.
    console.log("stopFun() started")
    //this line disables the stopbutton using the id="stopButton" in html file. 
    document.getElementById("stopButton").disabled = true;
    //this line enables the startbutton using the id="startButton" in html file. 
    document.getElementById("startButton").disabled = false;
}

function playStation(){
    console.log("playStation() started.")
    //play spaceStation sounds here
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}

function playIntro(){
    console.log("playIntro() started.")
    mySound = new sound("introTransition.wav")
    mySound.play();
}


function sound(srcFile){
    console.log("sound function started")
    this.sound = document.createElement("audio");
    this.sound.src = srcFile;
    this.sound.setAttribute("preload", "audio");
    this.sound.setAttribute("controls", "none")
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function(){
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }

}