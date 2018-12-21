class Algorithms {
    constructor(level) {
        this._level = level;
        
        this.TOTAL_LEVELS = 5;
        
        this.BASE_IMG_COUNT = 4;
        this.ADD_IMG_FOR_EACH_LEVEL = 2;
        
        this.BASE_ROW_COUNT = 2;
        this.ADD_ROW_FOR_EACH_LEVEL = 1;
    }
    
    getImgCount() {
        return this.BASE_IMG_COUNT + (this.ADD_IMG_FOR_EACH_LEVEL * this._level);
    }
    
    getRowCount() {
        return this.BASE_ROW_COUNT + (this.ADD_ROW_FOR_EACH_LEVEL * this._level);
    }
    
    getMultipleImagesCount() {
        return this.getImgCount() * 2
    }
    
    getColumnsForOneRow() {
        return this.getMultipleImagesCount() / this.getRowCount()
    }
}