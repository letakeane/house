const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');

function clickAnchorTag(event) {
  const event = document.createEvent('MouseEvent');
  event = new CustomEvent('click');
  const clickedLink = event.target;
  clickedLink.dispatchEvent(event);
};

function setUp() {
  option1.addEventListener('click', clickAnchorTag);
  option2.addEventListener('click', clickAnchorTag);

  document.querySelector('body').addEventListener('keydown', function(event) {
    console.log(event.key)
  })
}


window.onload = function(event) { alert('Working!') }
