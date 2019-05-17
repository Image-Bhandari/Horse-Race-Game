/*
author: Image Bhandari
UoN id: 18413643
tutor: Ganesh Khatri
assignment 2
module: CSY1018
2018

*/
var count=0;
i=3;
results=[];
var finishedHorseCount=0;
function calculation(horse)
//does all the calculation part as the game ends
{
  var amount=100;
  var rounds = document.getElementById('laps').value;
  var round = Math.ceil(parseInt(rounds));
  if(round>=1){
    round++;
  }

  var betAmt = document.getElementById('amount').value;
  var betsAmt=Math.ceil(parseInt(betAmt));

if(count==round*4-i){
i--;
results.push(horse.id);
  clearInterval(horse.interval);
  if(i==-1){
    // setresult();
    // alert();
  }
  var Running = document.getElementById("runHorse");
    Running.pause();
if(i==2){
var hColor = document.getElementById('bethorse').value;
if(hColor==horse.id){
  amount+=betsAmt;//increase the amount
  var win = document.getElementById("winHorse");
  win.play();
var Running = document.getElementById("runHorse");
  Running.pause();//stop sound
  alert("CONGRATULATIONS !! YOU GUESSED IT RIGHT");
  document.getElementById('start').disabled=false;
//enabling the buttons
  document.getElementById('laps').disabled=false;
  document.getElementById('amount').disabled=false;
  document.getElementById('bethorse').disabled=false;
document.getElementById('funds').innerHTML= amount;
}
else{
  amount-=betsAmt;//decrease the amount
  var lose = document.getElementById("loseHorse");
  loseHorse.play();
  document.getElementById('start').disabled=false;
//enabling the buttons
  document.getElementById('laps').disabled=false;
  document.getElementById('amount').disabled=false;
  document.getElementById('bethorse').disabled=false;
  alert("Ooops. ! Worng Decision! Your bet amount is reduced.")
var Running = document.getElementById("runHorse");
Running.pause();

  document.getElementById('funds').innerHTML= amount;
    return amount;
}

}}}
function moveHorse1(horse,position,position1,position2,position3,position4){
//takes parameters and puts in the following variables which makes the horse move

 var Horse1positionLeft = horse.offsetLeft/window.innerWidth*100;
 var Horse1positionTop = horse.offsetTop/window.innerHeight*100;
 var Running = document.getElementById("runHorse");
 Running.play();


  if( Horse1positionLeft < position&&Horse1positionTop>68){
  horse.className = 'horse runRight';
    horse.style.left = Horse1positionLeft+1+'vw';
    if(Horse1positionLeft>26&&Horse1positionLeft<27&&Horse1positionTop>=68){
    //clearInterval(horse.interval);
    count++;
    horse.className='horse standRight';

    }
 }else if(Horse1positionLeft>=position&&Horse1positionTop>position1){
   horse.className='horse runUp';
   horse.style.top=Horse1positionTop-1+'vh';

 }else if(Horse1positionLeft>position2&&Horse1positionTop<=position1){
   horse.className='horse runLeft';
   horse.style.left=Horse1positionLeft-1+'vw';

}else if(Horse1positionTop<position4&&Horse1positionLeft<=position3){
   horse.className='horse runDown';
    horse.style.top=Horse1positionTop+1+'vh';
 }

 calculation(horse);
}
function check()
//this function checks weather the input values are correct or not
{ var amount = 100;
  var rounds = document.getElementById('laps').value;//geting the value for laps
  var round = Math.ceil(parseInt(rounds));//converting into integer
  var betAmt = document.getElementById('amount').value;//getting bet amount
  var betsAmt=Math.ceil(parseInt(betAmt));//converting in integer
  if(betsAmt>amount){
    alert("NOT ENOUGH FUNDS !!");
  }
  else if(betsAmt<0)
  {
    alert("INVALID INPUT !!");
  }
  else if(round<1)
  {
    alert("INVALID INPUT");
  }
  else{
    document.getElementById('laps').disabled=true;
    document.getElementById('amount').disabled=true;
    document.getElementById('bethorse').disabled=true;
    time();//when all inputs are correct then directs to the function time.
  }

}
function time()
//this function is a short animation before the race begin which lasts for 3 seconds
{
  var startNote = document.createElement("div");//it creates a div element
     startNote.setAttribute("style","border-radius:50px;background-color:grey;opacity:0.7;font-size:36px;width:100%;height:100%;position:absolute;text-align:center;");
     startNote.innerHTML = " ---Race starts in 3 -2 -1 And GO !---";//text inside div
     setTimeout(function(){
      startNote.parentNode.removeChild(startNote);
      begin();//after 3 seconds calls begin function
    },3000);
     document.body.appendChild(startNote);//removes the division

}

function begin()
//this is the main part for running horse at random speed
{
  var Gun = document.getElementById("gun");
  Gun.play();//a sound effect

  var starting = document.getElementById('start');
  starting.disabled=true;//disabling start button

  i=3;
 var speed1 = Math.ceil(Math.random()*10)+99;
 var speed2 = Math.ceil(Math.random()*10)+99;
 var speed3 = Math.ceil(Math.random()*10)+99;
 var speed4 = Math.ceil(Math.random()*10)+99;
 var position1 = Math.ceil(Math.random()*10)+69;
 var position2 = Math.ceil(Math.random()*10)+69;
 var position3 = Math.ceil(Math.random()*10)+69;
 var position4 = Math.ceil(Math.random()*10)+69;
 var position5 = Math.ceil(Math.random()*10)+1;
 var position6 = Math.ceil(Math.random()*10)+1;
 var position7 = Math.ceil(Math.random()*10)+1;
 var position8 = Math.ceil(Math.random()*10)+1;
 var position9 = Math.ceil(Math.random()*10)+1;
 var position10 = Math.ceil(Math.random()*10)+1;
 var position11= Math.ceil(Math.random()*10)+1;
 var position12 = Math.ceil(Math.random()*10)+1;
 var position13 = Math.ceil(Math.random()*10)+70;
 var position14 = Math.ceil(Math.random()*10)+70;
 var position15 = Math.ceil(Math.random()*10)+70;
 var position16 = Math.ceil(Math.random()*10)+70;
 var position17 = Math.ceil(Math.random()*14)+68;
  var position18 = Math.ceil(Math.random()*14)+68;
  var position19 = Math.ceil(Math.random()*14)+68;
  var position20 = Math.ceil(Math.random()*14)+68;
  var Horse1 = document.getElementById('horse1');
  Horse1.interval = setInterval(function(){
    moveHorse1(Horse1,position1,position5,position9,position13,position17);
  },speed1);
  var Horse2 = document.getElementById('horse2');
  Horse2.interval = setInterval(function(){
    moveHorse1(Horse2,position2,position6,position10,position14,position18);
  },speed2);
  var Horse3 =document.getElementById('horse3');
  Horse3.interval=setInterval(function(){
    moveHorse1(Horse3,position3,position7,position11,position15,position19);
  },speed3);
 var Horse4 =document.getElementById('horse4');
 Horse4.interval=setInterval(function(){
   moveHorse1(Horse4,position4,position8,position12,position16,position20);
 },speed4);

}

function start()//this is the starting part of the game execution
{ alert("Welcome to the Horse Bet Game :) :) !");//alert before game starts
alert("How To Play? : You firstly have cash 100. You have to bet on either of the horse, if the horse you choosed wins then the bet amount will be added to your total amount else same amount will be deduced.You can manage the number of laps as your choice. Enjoy!!");
  var starting = document.getElementById('start');
  starting.addEventListener('click',check);//waits for click event and forwards execution to check function.
}
  document.addEventListener('DOMContentLoaded', start);
