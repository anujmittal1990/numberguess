'use strict';

//Variable Initialization
let num = Math.trunc(Math.random()*20+1);//Secret Number
let score=20;
let highscore=0;

//Click Event Handler
document.querySelector('.check').addEventListener('click',function()
{
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  
  //If No Number Entered
  if (!guess)
  {
    document.querySelector('.message').textContent = 'Please Eneter the Number!';
    console.log('Please Eneter the Number');
  }
  
  //If Secret Number and Guess are Same
  else if (guess===num)
    {
      document.querySelector('.number').textContent=num;
      document.querySelector('.message').textContent='Congratulations!';
      document.querySelector('body').style.backgroundColor='Green';
      
      //Assign HIgh Score
      if (score>highscore)
      {
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
      }
    }
    //If Guess is not equal to secret number
    else if (guess!==num)
    {
      //Play with last chance
      if (score>1)
      {
        document.querySelector('.message').textContent=(guess>num?'Too High':'Too Low');
        score--;
        document.querySelector('.score').textContent=score;
      }
      //Game Over after playing all chances
      else
      {
        document.querySelector('.message').textContent='You Lost';
        document.querySelector('.score').textContent=0;
      }

    } 
  
    // Reset the game
    document.querySelector('.again').addEventListener('click',function()
    {
      score = 20;
      let num = Math.trunc(Math.random() * 20) + 1;
    
      document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = score;
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
    
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
    })
  
 
})