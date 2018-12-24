class Game {
    constructor() {
        this.rootElement = document.getElementById('root');
        this.prevImgIndex = false;
        this.clickIsDisabled = false;
        
        this.score = this.scoreCounter();
        this.renderNewScore();
    }
    
    disableClick() {
        this.clickIsDisabled = true
    }
    
    enableClick() {
        this.clickIsDisabled = false;
    }
    
    openImg(e, currentImgIndex) {
        let {currentTarget} = e;
        
        if (this.clickIsDisabled || currentTarget.classList.contains('opened')) return;
        
        currentTarget.classList.add('opened');
        let img = currentTarget.querySelector(`[data-id="${currentImgIndex}"]`);
        
        Helpers.showImg(img);
        
        if (!this.prevImgIndex) {
            this.prevImgIndex = currentImgIndex;
        } else if (this.prevImgIndex !== currentImgIndex) {
            this.disableClick();
            
            setTimeout(() => {
                let {rootElement} = this;
                let prevImg = rootElement.querySelectorAll(`[data-id="${this.prevImgIndex}"]`);
                
                currentTarget.classList.remove('opened');
                prevImg.forEach(prev => prev.closest('.game-item').classList.remove('opened'));
                
                Helpers.hideImg(img);
                prevImg.forEach(prev => Helpers.hideImg(prev));
                
                this.prevImgIndex = false;
                this.enableClick();
                
            }, 1000);
            
        } else {
            this.renderNewScore();
            this.prevImgIndex = false;
        }
    }
    
    renderNewScore () {
        let scoreTmplElement = document.getElementById('scoreTmpl');
        let scoreElement = document.getElementById('score');
    
        let html = scoreTmplElement.innerHTML;
        scoreElement.innerHTML = Handlebars.compile(html)({score: this.score()});
    };
    
    scoreCounter() {
        let currentScore = -1;
        
        return function (score = 1) {
            return currentScore += score;
        };
    }
}