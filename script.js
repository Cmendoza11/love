const heart = document.getElementById('heart');
const letter = document.getElementById('letter');

heart.addEventListener('click', () => {
  heart.classList.add('move');
  setTimeout(() => {
    letter.classList.add('show');
  }, 1000); // wait for heart to move
});
