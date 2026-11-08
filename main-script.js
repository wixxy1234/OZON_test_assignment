document.addEventListener('DOMContentLoaded', () => {
    const progressElement = document.getElementById('my-progress');

    const progressBar = new ProgressBar(progressElement);

    const inputValue = document.getElementById('value-input');
    const toggleAnimate = document.getElementById('animate-toggle');
    const toggleHide = document.getElementById('hide-toggle');


    inputValue.addEventListener('input', (event) => {
        if (event.target.value === '' || event.target.value === '-') {
            return;
        }
        
        event.target.value = progressBar.setValue(event.target.value);
    });

    toggleAnimate.addEventListener('change', (event) => {
        progressBar.setAnimated(event.target.checked);
    });

    toggleHide.addEventListener('change', (event) => {
        progressBar.setHide(event.target.checked);
    });
});