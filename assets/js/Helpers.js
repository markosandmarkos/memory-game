class Helpers {
    static shuffle(arr) {
        let ctr = arr.length, temp, index;
        while (ctr > 0) {
            index = Math.floor(Math.random() * ctr);
            ctr--;
            temp = arr[ctr];
            arr[ctr] = arr[index];
            arr[index] = temp;
        }
        return arr;
    }
    
    static showImg(img) {
        let parent = img.closest('.game-item');
        let icon = parent.querySelector('i');
        
        img.classList.remove('d-none');
        parent.classList.remove('bg-dark');
        
        parent.classList.add('bg-secondary');
        icon.classList.add('d-none');
    }
    
    static hideImg(img) {
        let parent = img.closest('.game-item');
        let icon = parent.querySelector('i');
        
        img.classList.add('d-none');
        parent.classList.add('bg-dark');
        
        icon.classList.remove('d-none');
        parent.classList.remove('bg-secondary');
    }
    
    static makeCounter() {
        let count = 0;
    
        return function (addedCount = 1) {
            return count += addedCount;
        };
    }
}