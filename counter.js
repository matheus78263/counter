        const boxCounter = document.getElementById('boxCounter');
        const btnContainer = document.getElementById('container-button');

        btnContainer.addEventListener('click', (e) => {
            const buttonId = e.target.id;
            let counterValue = boxCounter.innerText;
            if (buttonId === 'btn-decrement') {
                counterValue--;
            } else if (buttonId === 'btn-increment') {
                counterValue++;
            } else if (buttonId === 'btn-reset') {
                counterValue = 0;
            }
            boxCounter.innerText = counterValue;
            if (counterValue < 0) {
                boxCounter.style.color = 'red';
            } else if (counterValue > 0) {
                boxCounter.style.color = 'green';
            } else {
                boxCounter.style.color = '#222';
            }
        });