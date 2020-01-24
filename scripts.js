window.onload = () => {
  document.querySelector('body').addEventListener('keydown', (event) => {
    console.log(event.key);
    if (event.key === 65) {
      console.log('A ');
      document.querySelector('.option1').click();
    } else if (event.key === 66) {
      console.log('B');
      document.querySelector('.option2').click();
    }
  })
}
