class App extends Algorithms {
    constructor(level) {
        super(level);
        
        this._level = level;
        
        this.data = this.generateData();
        console.log(this.data);
        this.render();
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
        
        images = shuffle([...images, ...images]);
        
        images.forEach(value => {
            columns.push(value);
            if (columns.length === this.getColumnsForOneRow()) {
                data.push(columns);
                columns = [];
            }
        });
        
        return data;
    }
}