let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let  numClosedDoors=3;
let openDoor1;
let openDoor2;
let openDoor3;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
let currentlyPlaying = true;


let botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
let beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
let spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
let startButton = document.getElementById('start');


doorImage1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying === true){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
}}


doorImage2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying === true){
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
  }}

doorImage3.onclick = () => {
  if(!isClicked(doorImage3) && currentlyPlaying === true){
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
  }}

  startButton.onclick = () =>{
    startRound();
  }
    let startRound = () =>{
     if(!currentlyPlaying){
     
      doorImage1 = document.getElementById('door1');
      doorImage2 = document.getElementById('door2');
      doorImage3 = document.getElementById('door3');
      numClosedDoors=3;
     
      closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
      doorImage1.src = closedDoorPath;
      doorImage2.src = closedDoorPath;
      doorImage3.src = closedDoorPath;
      currentlyPlaying = true;
     
      startButton.innerHTML = 'Good Luck!';
      randomChoreDoorGenerator();
     }
      
    }
    

  let gameOver = (status) =>{
    if(status ==='win'){
      startButton.innerHTML = 'You win! Play Again?';
    } else {
      startButton.innerHTML = 'You big loser! Try again?';
    }
    currentlyPlaying = false;
  }

  let randomChoreDoorGenerator = () =>{
    let choreDoor = Math.floor(Math.random()*numClosedDoors);
    if(choreDoor === 0){
      openDoor1 = botDoorPath;
      openDoor2 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    }else if(choreDoor === 1){
      openDoor2 = botDoorPath;
      openDoor1 = beachDoorPath;
      openDoor3 = spaceDoorPath;
    }else{
      openDoor3 = botDoorPath;
      openDoor1 = spaceDoorPath;
      openDoor2 = beachDoorPath;
    }
  }
 

  let isBot = (door) =>{
    if(door.src === botDoorPath){
      return true;
    } else return false;
    }

  let isClicked =(door) =>{
    if (door.src === closedDoorPath){
      return false;
    } else return true;

  }

  let playDoor = (door) => {
    numClosedDoors --;

    if(isBot(door)===true){
      if(numClosedDoors === 0){      
        gameOver('win');      
    } else gameOver();
  }
}
randomChoreDoorGenerator();
