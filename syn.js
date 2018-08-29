document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. Random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //Display the result for both dice
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
  });
document.querySelector('.btn-roll1').addEventListener('click', function() {
    var dice1 = Math.floor(Math.random() * 6) +1;
    var diceDom1 = document.querySelector('.dice1');
    diceDom1.style.display = 'block';
    diceDom1.src = 'dice-' + dice1 + '.png';
  });
  document.querySelector('.btn-roll2').addEventListener('click', function() {
      var word1 = Math.floor(Math.random() * 6) +1;
      var worddiceDom1 = document.querySelector('.word1');
      worddiceDom1.style.display = 'block';
      worddiceDom1.src = 'word-' + word1 + '.png';
    });
    document.querySelector('.ballbutton').addEventListener('click', function() {
        var ball1 = Math.floor(Math.random() * 3) +1;
        console.log(ball1);
        var ballDom1 = document.querySelector('.ball1');
        ballDom1.style.display = 'block';
        ballDom1.src = '8ball-' + ball1 + '.png';
      });
