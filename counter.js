const boxCounter = document.getElementById('boxCounter');
const bntContainer = document.getElementById('container-button');

bntContainer.addEventListener('click', e => {
    const buttonId = e.target.id;
    let conterValue = boxCounter.innerText;
    if (buttonId === 'bnt-decrement'){
        counterValue--;
    } else if (buttonId === 'bnt-reset'){
        counterValue = 0;
    } else if (buttonId === 'bnt-increment'){
        counterValue++;
    }
    boxCounter.textContet = counterValue;
    if (couterValue < 0){
        boxCounter.style.color = 'red';
    } else if (counterValue > 0){
        boxCounter.style.color = 'green';
    } else {
        boxCounter.style.color = '#222';
    }
})