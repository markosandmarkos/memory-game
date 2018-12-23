class App extends Algorithms {
    constructor(level) {
        super(level);
        this._level = level;
        
        if (this.validLevel()) {
            this.data = this.generateData();
            this.render();
            
            this.game = new Game();
        }
    }
    
    render() {
        let {data} = this;
        let root = document.getElementById('root');
        let html = root.innerHTML;
        root.innerHTML = Handlebars.compile(html)({rows: data});
    }
    
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
}