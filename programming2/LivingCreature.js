class LivingCreature{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.directions = []    
    }    
chooseCell(char) {
        this.getNewCordinates();
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    result.push(this.directions[i]);
                }
            }

        }

    }
}

