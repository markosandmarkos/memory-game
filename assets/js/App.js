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
        let data = [];
        
        const columnsForOneRow = (this.FIRST_LEVEL_IMG_COUNT) / (this.FIRST_LEVEL_ROW_COUNT);
        let rows = 0;
        let rowData = [];
        
        for (let i = 1; i <= this.FIRST_LEVEL_IMG_COUNT; i++) {
            rowData.push(i);
            rows++;
            if (rows === columnsForOneRow) {
                data.push(rowData);
                rowData = [];
                rows = 0;
            }
        }
        return shuffle(data);
    }
    
    generateData2() {
        this.generateRows();
        this.generateColumns();
    }
    
    generateRows() {
    
    }
    
    generateColumns() {
    
    }
}