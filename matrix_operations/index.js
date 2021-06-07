class matrix_operations {

  constructor(arr1, arr2) {
    this.arr1 = arr1;
    this.arr2 = arr2;
  }

  //matrix compatibility
  checkCompatibility() {
   return this.arr1.length === this.arr2.length
  }

  //addition
  addition() {
    if(!this.checkCompatibility()){
        return new Error("matrix failed compatibility test")
    }
    let resultant = [];
    for (let i = 0; i < this.arr1.length; i++) {
        resultant[i] = this.arr1[i] + this.arr2[i];
    }
    return resultant;
  }

  //subtraction
  subtraction() {
    if(!this.checkCompatibility()){
        return new Error("matrix failed compatibility test")
    }
    let resultant = [];
    for (let i = 0; i < this.arr1.length; i++) {
        resultant[i] = Math.abs(this.arr1[i] - this.arr2[i]);
    }
    return resultant;
  }
  
}

const newMatrix = new matrix_operations([1, 2, 3, 4, 5, 6],[2, 4, 6, 8, 10, 11])
console.log({
    "addition" : newMatrix.addition()
})
console.log({
    "subtraction" : newMatrix.subtraction()
})