class matrix_operations {
  constructor(...args) {
    args.forEach((arr, i) => {
      this["arr" + i] = arr;
    });
  }

  //matrix compatibility
  checkCompatibility() {
    const that = this;
    var val = Object.values(that);
    return val.every((arr) => {
      return val[0].length === arr.length;
    });
  }

  //addition
  addition() {
    const that = this;
    if (!that.checkCompatibility()) {
      return new Error("matrix failed compatibility test");
    }
    var val = typeof that == "object" ? Object.values(that) : [];

    return val.reduce((prev, next) => {
      if (prev && prev.length) {
        for (let i = 0; i < prev.length; i++) {
          prev[i] = prev[i] + next[i];
        }
        return prev;
      }
      return next;
    }, []);
  }

  //subtraction
  subtraction() {
    const that = this;
    if (!that.checkCompatibility()) {
      return new Error("matrix failed compatibility test");
    }
    var val = typeof that == "object" ? Object.values(that) : [];

    return val.reduce((prev, next) => {
      if (prev && prev.length) {
        for (let i = 0; i < prev.length; i++) {
          prev[i] = prev[i] - next[i];
        }
        return prev;
      }
      return next;
    }, []);
  }
}

const newMatrix = new matrix_operations(
  [1, 2, 3, 4, 5, 6],
  [2, 4, 6, 8, 10, 11],
  [2, 5, 7, 1, 3, 4]
);

console.log({
  addition: newMatrix.addition(),
});
console.log({
  subtraction: newMatrix.subtraction(),
});
