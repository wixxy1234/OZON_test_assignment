class ProgressBar {
    constructor(progressBarContainer) {
        this.progressBarContainer = progressBarContainer;

        this.fillCircle = this.progressBarContainer.querySelector('.progress-fill');

        this.radius = 45;

        //  C = 2 × π × radius
        this.circumference = 2 * Math.PI * this.radius;

        this.fillCircle.style.strokeDasharray = this.circumference;
        this.fillCircle.style.strokeDashoffset = this.circumference;

        this.setAnimated(false)
        this.setHide(false)
    }


    setValue(value) {
        const safeValue = Math.max(0, Math.min(100, Number(value)));

        const greyLine = this.circumference - (safeValue / 100) * this.circumference

        this.fillCircle.style.strokeDashoffset = greyLine

        return safeValue;
    }

    setAnimated(isAnimated) {
        if (isAnimated) {
            this.progressBarContainer.classList.add('is-animated')
        } else {
            this.progressBarContainer.classList.remove('is-animated')
        }
    }

    setHide(isHidden) {
        if (isHidden) {
            this.progressBarContainer.classList.add('is-hidden')
        } else {
            this.progressBarContainer.classList.remove('is-hidden')
        }
    }
}