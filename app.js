
//Declaring Fundamental Variables

var scores, roundScore, activePlayer, gamePlaying;

init();

//Event listeners for dice random values (1 - 6)

document.querySelector('.btn-roll').addEventListener('click' , function (){
    if(gamePlaying)
    {
    //Generating Random Dice NUmber
    var dice = Math.floor(Math.random() * 6) + 1;
   
    //Display the dice result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    
    //Updating round score if the dice rolled nmber is not 1 
    if(dice !== 1)
    {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
   }
   else
   {
       //nextPlayer
       nextPlayer();
   }
}
}
);

//hold functionality
document.querySelector('.btn-hold').addEventListener('click',function()
{

    if(gamePlaying)
    {
    //Updating Global Score
    scores[activePlayer] += roundScore;

    //updatinf the score 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //winner 
    if(scores[activePlayer] >= 20)
    {
        document.querySelector('#name-' + activePlayer).textContent = '!! Winner !!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else
    {
        //nextPlayer
        nextPlayer();
    }
}
});

nextPlayer =() =>
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
       
       //Reseting Round Score
       roundScore = 0;

       //Starting From Zero since dice number is 1
       document.querySelector('#current-0').textContent = '0';
       document.querySelector('#current-1').textContent = '0';

       //Toggling Active Players
       document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');

       //reseting the dice by hiding for the next player
       document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init()
{
 scores = [0,0];
activePlayer = 0;
roundScore = 0;
gamePlaying = true;

//Initially Hiding the dice

document.querySelector('.dice').style.display = 'none';

//setting current score and plating score to 0

document.getElementById('score-0').textContent = '0' ;
document.getElementById('score-1').textContent = '0' ;
document.getElementById('current-0').textContent = '0' ;
document.getElementById('current-1').textContent = '0' ;
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
//set to default 
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
//set player 1 in active 
document.querySelector('.player-0-panel').classList.add('active');
}