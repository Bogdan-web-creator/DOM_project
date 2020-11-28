window.addEventListener('DOMContentLoaded', function () {

    function rollDice () {

        let diceSide1 = document.getElementById('dice-side-1');
        let diceSide2 = document.getElementById('dice-side-2');
        let status = document.getElementById('status');

        let side1 = Math.floor( Math.random() * 6 ) + 1;
        let side2 = Math.floor( Math.random() * 6 ) + 1;

        diceSide1.innerHTML = side1;
        diceSide2.innerHTML = side2;

        if(side1 > side2){
          status.innerHTML = 'Player 1 wins!';
      }
      else{
        status.innerHTML = 'Player 2 wins!';
      }

        if ( side1 === side2 ) {
            status.innerHTML = 'Draw!';
        }

        if (side1 === side2){
          status.style.right = "255px";
        }
        else{
          status.style.right = "330px";
        }
    }

    let buttonRollDice = document.querySelector('.dice-roll');
    buttonRollDice.addEventListener('click', rollDice, false);

}, false);
