window.addEventListener('load', () => {
    console.log('Window is loaded');

    const msgElement = document.getElementById('dynamic-msg');
    if (msgElement) {
        msgElement.textContent = 'Hello this is 2nd commit...';
    }
});