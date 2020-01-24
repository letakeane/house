const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2')

option1.addEventListener('click', clickAnchorTag);
option2.addEventListener('click', clickAnchorTag);

document.querySelector('body').addEventListener('keydown', function(event) {
  console.log(event.key);
  if (event.key == 65) {
    option1.click();
  } else if (event.key == 66) {
    option2.click();
  }
});

function clickAnchorTag(event) {
  const event = document.createEvent('MouseEvent');
  event = new CustomEvent('click');
  const clickedLink = event.target;
  clickedLink.dispatchEvent(event);
};

console.log('connected')
