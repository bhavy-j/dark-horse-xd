window.addEventListener('load', () => {
    const msgElement = document.getElementById('dynamic-msg');
    if (msgElement) {
        msgElement.textContent = 'Hello From js-logic branch!!';
    }

    const button = document.getElementById('change-experience');
    if (button) {
        button.addEventListener('click', () => {
            //change bg color to random gradient
            const randomColor1 = Math.floor(Math.random() * 256);
            const randomColor2 = Math.floor(Math.random() * 256);
            const randomColor3 = Math.floor(Math.random() * 256);
            document.body.style.background = `linear-gradient(to right, rgb(${randomColor1}, ${randomColor2}, ${randomColor3}), rgb(${randomColor3}, ${randomColor1}, ${randomColor2}))`;
        });
    }
});