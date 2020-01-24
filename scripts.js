window.onload = () => {
  document.querySelector('.option1').addEventListener('click', clickAnchorTag);
  document.querySelector('.option2').addEventListener('click', clickAnchorTag);
  document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === 65) {
      console.log('a')
      document.querySelector('.option1').click();
    } else if (event.key === 66) {
      document.querySelector('.option2').click();
    }
  })
}

const clickAnchorTag = (event) => {
  const event = document.createEvent('MouseEvent');
  event = new CustomEvent('click');
  const clickedLink = event.target;
  clickedLink.dispatchEvent(event);
}
