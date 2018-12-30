class App extends Algorithms {
    constructor(level) {
        super(level);
        this._level = level;
        
        if (this.validLevel()) {
            this.rootElement = document.getElementById('root');
            this.loadingElement = document.getElementById('loading');
            this.data = this.generateData();
            
            window.onload = () => this.render();
            
            this._game = new Game();
        }
    }
    
    render() {
        let {data} = this;
        let html = this.rootElement.innerHTML;
        this.rootElement.innerHTML = Handlebars.compile(html)({rows: data});
        this.hideLoading();
    };
    
    generateData() {
        let data = [],
            images = [],
            columns = [];
        
        for (let i = 1; i <= this.getImgCount(); i++) images.push(i);
        
        let imgShuffled = Helpers.shuffle([...images, ...images]);
        
        imgShuffled.forEach(value => {
            columns.push(value);
            if (columns.length === this.getColumnsForOneRow()) {
                data.push(columns);
                columns = [];
            }
        });
        
        return data;
    }
    
    validLevel() {
        let {_level} = this;
        return _level && !isNaN(_level) && _level > 0 && _level <= this.MAX_LEVEL;
    }
    
    hideLoading() {
        setTimeout(() => {

            this.rootElement.classList.remove('d-none');
            this.rootElement.classList.add('fade-in');
        }, 5000);
    }
}