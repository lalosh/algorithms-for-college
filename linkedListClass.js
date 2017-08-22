class LinkedList{
    constructor(){
        this._linkedList = [];
    }
    add(v){

        if(this._linkedList.length == 0) {
            let obj = { value: v, next: 0 }
            this._linkedList.push(obj);            
        }
        else{
            let obj = { value: v, next: 0};
            this._linkedList[this._linkedList.length-1].next = obj;
            this._linkedList.push(obj);
        }
    }
    print(){
        this._linkedList.forEach(function(element) {
            console.log(`
                { ${element.value} , ${element.next} }
            `)
        }, this);
    }
}

let l = new LinkedList();
l.add(5);
l.add(2);
// l.add(6);
l.print();