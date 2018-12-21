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
        let rows = 0,
            data = [],
            imagesArr = [],
            columnsData = [];
        
        for (let i = 1; i <= this.FIRST_LEVEL_IMG_COUNT; i++) {
            imagesArr.push(i);
        }
        
        imagesArr = shuffle([...imagesArr, ...imagesArr]);
        
        imagesArr.forEach(value => {
            rows++;
            columnsData.push(value);
            if (rows === this.FIRST_LEVEL_ROW_COUNT) {
                data.push(columnsData);
                columnsData = [];
                rows = 0;
            }
        });
        
        return shuffle(data);
    }
}