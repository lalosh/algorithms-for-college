let point = {
    x: 0,
    y: 0,
    isLegalPoint: function isLegalPoint(pos){
        return (Grid.isInside(pos.x, pos.y));
    }
}

let Grid = {
    _grid: [],
    position: point,
    init: function init(){
        
        this.position.x = 0;
        this.position.y = 0;

        for (let i = 0; i < 8; i++) {
            let tmp = [];
        
            for (let j = 0; j < 8; j++)
                tmp.push(-1);

            this._grid.push(tmp);
        }
    },
    print: function print(){
        console.log('--------------------');
        for (let i = 0; i < 8; i++) 
                console.log(this._grid[i]);
        console.log('--------------------');        
    },
    isInside: function isInside(x,y){
        return (x>=0 && x <= 8 && y>=0 && y<= 8);
    },
    getXY: function getXY(x,y){
        return this._grid[x][y];
    },
    getPoint: function getPoint(pos){
        return this.getXY(this._grid[pos.x][pos.y]);
    },
    setPoint: function setPoint(pos){
        return (function(val){
            this._grid[pos.x][pos.y] = val;
        }).bind(this);
    },
    setXY: function setXY(x,y){
        return (function(val){
            // if(this._grid[x][y] == -1)
                this._grid[x][y] = val;
        }).bind(this);
    },
    possibleMoves: function possibleMoves(){
        let x = this.position.x;
        let y = this.position.y;

        let possibleMoves = [];

        if(point.isLegalPoint({x:(x+2),y:(y+1)}))
            possibleMoves.push({x:(x+2),y:(y+1)});

        if(point.isLegalPoint({x:(x+2),y:(y-1)}))
            possibleMoves.push({x:(x+2),y:(y-1)});
        
        if(point.isLegalPoint({x:(x-2),y:(y+1)}))
            possibleMoves.push({x:(x-2),y:(y+1)});
        
        if(point.isLegalPoint({x:(x-2),y:(y-1)}))
            possibleMoves.push({x:(x-2),y:(y-1)});
        
        if(point.isLegalPoint({x:(x+1),y:(y+2)}))
            possibleMoves.push({x:(x+1),y:(y+2)});
        
        if(point.isLegalPoint({x:(x+1),y:(y-2)}))
            possibleMoves.push({x:(x+1),y:(y-2)});
        
        if(point.isLegalPoint({x:(x-1),y:(y+2)}))
            possibleMoves.push({x:(x-1),y:(y+2)});
        
        if(point.isLegalPoint({x:(x-1),y:(y-2)}))
            possibleMoves.push({x:(x-1),y:(y-2)});
        
        return possibleMoves;
    }
    
}

// grid.init();
// grid.print();
// console.log(grid.isInside(-1,8));
// grid.setXY(1,1)(2);

// grid.print();

// grid._grid[1][1] = 3;
// grid.print();
// console.log(grid.getXY(1,1))
// console.log(grid.possibleMoves());

let grid = Object.create(Grid);
grid.init();

let path = [];

function tryy(counter,pos){
    if(counter < 64 && ){

        if(grid.getXY(pos.x,pos.y) < 0)
            grid.setXY(pos.x,pos.y)(counter);
        
        let possibleMoves = grid.possibleMoves(pos);

        grid.print();
        

        if(possibleMoves.length > 0){
            counter++;

            for (let i = 0; i < possibleMoves.length; i++) {
                console.log(possibleMoves[i]);
                let res = tryy(counter,possibleMoves[i]);
                if(res){
                    path.push(res);
                }
            }
        }
        else
            if(counter == 64) return pos;
            else return false;
    }
}

tryy(0,{x:0,y:0});