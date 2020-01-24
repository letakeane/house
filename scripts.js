window.onload = () => {
  document.querySelector('body').addEventListener('keydown', (event) => {
    if (event.key === 65) {
      document.querySelector('.option1').click();
    } else if (event.key === 66) {
      document.querySelector('.option2').click();
    }
  })
}
