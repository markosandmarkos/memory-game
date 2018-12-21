class App extends Constants {
    constructor(level) {
        super();
        
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
        
        let columnsForOneRow = (this.FIRST_LEVEL_IMG_COUNT * 2) / this.FIRST_LEVEL_ROW_COUNT;
        
        for (let i = 1; i <= this.FIRST_LEVEL_IMG_COUNT; i++) {
            images.push(i);
        }
        
        images = shuffle([...images, ...images]);
        
        images.forEach(value => {
            columns.push(value);
            if (columns.length === columnsForOneRow) {
                data.push(columns);
                columns = [];
            }
        });
        
        return data;
    }
}