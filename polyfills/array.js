const arr = [2, 3, 4, 5, 6, 7, 8, 9];

if (typeof Array.prototype._map !== "funtion") {
    Array.prototype._map = function (cb) {
        if(typeof cb !== "function") {
            throw new Error("cb should be function !")
        }
        const result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(cb(this[i], i, this))
        }
        return result;
    }
}

const _mapTest = arr._map(a=> a*2);
// console.log("_mapTest", _mapTest);

if (Array.prototype._filter !== "function") {
    Array.prototype._filter = function (cb) {
        if(typeof cb !== "function") {
            throw new Error("cb should be function !")
        }
        const result = [];
        for (let i = 0; i < this.length; i++) {
            if (cb(this[i], i, this)) {
                result.push(this[i])
            }
        }
        return result;
    }
}

const _filterTest = arr._filter(a => a > 7);
// console.log("_filterTest", _filterTest);

if(typeof Array.prototype._forEach !== "function") {
    Array.prototype._forEach = function(cb) {
        if(typeof cb !== "function") {
            throw new Error("cb should be an array !")
        }
        for (let i = 0; i < this.length; i++) {
         cb(this[i], i);
        }
    }
}

// arr._forEach((a, i) => console.log(i, a+i));

if(typeof Array.prototype._reduce !== "function") {
    Array.prototype._reduce = function(cb, initialValue) {
        if(typeof cb !== "function") {
            throw new Error("cb should be an array !")
        }
        let accumulator = initialValue;
        for(let i=0; i < this.length; i++) {
            accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
        }
        return accumulator;
    }
}

const _reduceTest = arr._reduce((acc, curr)=> acc+ curr,0);
// console.log("_reduceTest",_reduceTest);


if( typeof Array.prototype._flat !== "function") {
    Array.prototype._flat = function () {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if(Array.isArray(this[i])){
                result = result.concat(this[i]._flat())
            }  else {
                result.push(this[i])
            }
        }
        return result;
    }
}

console.log("Falt", [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]], [6,[7,[8]]]]._flat());
