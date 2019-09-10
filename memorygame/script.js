
var flippedCards;

// add images on container
function placeCard() {
  var card = document.getElementsByClassName('card');
  flippedCards = [];
  var pics = ["url('blue.png')", "url('yellow.png')", "url('black.gif')", "url('green.jpg')",
    "url('purple.jpg')", "url('red.jpg')", "url('blue.png')", "url('yellow.png')", "url('black.gif')", "url('green.jpg')",
    "url('purple.jpg')", "url('red.jpg')"];

  shuffle(pics);

  for (var i = 0; i < card.length; i++) {
    if (card[i].classList.contains('flipped')) {
      card[i].classList.toggle('flipped');
    }
    card[i].querySelector('.back').style.backgroundImage = pics[i];
    card[i].addEventListener('click', flip);
  }

}
placeCard();


//flipped card everytime it is clicked
function flip() {
  if (!this.classList.contains('flipped') && flippedCards.length < 2) {
    this.classList.toggle('flipped');
    flippedCards.push(this);
    if (flippedCards.length === 2) {
      checkMatch();
    }
  }
  // checks if opened cards are matching
  function checkMatch() {
    if (flippedCards[0].querySelector('.back').style.backgroundImage === flippedCards[1].querySelector('.back')
      .style.backgroundImage) {
      flippedCards = [];
    }
    else {
      setTimeout(flipBack, 1600);
    }
  }
}

// method for flipping card 
function flipBack() {
  flippedCards[0].classList.toggle('flipped');
  flippedCards[1].classList.toggle('flipped');
  flippedCards = [];
}

//method for shuffling cards everytime you reload
function shuffle(pics) {
  for (var i = 0; i < pics.length; i++) {
    var x = Math.floor(Math.random() * (i + 1));
    var temp = pics[i];
    pics[i] = pics[x];
    pics[x] = temp;
  }
  return pics;
}






