const gameEnteries = ["WIN", "TRY AGAIN","TRY AGAIN", "WIN", "TRY AGAIN","TRY AGAIN","TRY AGAIN","WIN","TRY AGAIN","WIN","TRY AGAIN","TRY AGAIN"];
const wheelEl = document.getElementById("wheel"); 

const generateRandomStop = (maxNo = 12) => Math.floor(Math.random() * maxNo) +1;

const stopAnimation = (stopIndex) => {
    const degreesToTurn = stopIndex * 30 - 15;
    // 2160 = 6 turns
    const stopPosition = 2160 + degreesToTurn; 
    wheelEl.style.animationDuration = "3s";
    wheelEl.style.transform = `rotate(${stopPosition}deg)`;
}

const spinWheel = () => {
wheelEl.classList.add('spinAnimation');
    setTimeout(()=>{
    const stopIndex = generateRandomStop() - 1;
    const result = gameEnteries[stopIndex];
    stopAnimation(stopIndex);
     console.log(result, stopIndex);
    },1000);  
}

wheelEl.onanimationend = () => {
    console.log("Animation ended");
    wheelEl.classList.remove('spinAnimation');
    wheelEl.style = ''
  };