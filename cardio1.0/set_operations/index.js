class SetOperation {
  constructor(arr1, arr2) {
    (this.arr1 = arr1), (this.arr2 = arr2);
  }

  //union
  union() {
    return [...new Set(this.arr1.concat(this.arr2))];
  }

  //intersection
  intersection() {
    return this.arr1.filter((ele) => this.arr2.includes(ele));
  }

  //Difference
  difference() {
    return this.arr1.filter((ele) => !this.arr2.includes(ele));
  }

  //symentic Difference
  symenticDifference() {
    return this.arr1
      .filter((ele) => !this.arr2.includes(ele))
      .concat(this.arr2.filter((ele) => !this.arr1.includes(ele)));
  }
}

const elements = new SetOperation(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [2, 4, 6, 8, 10, 11]
);

console.log({
  Union: elements.union(),
});
console.log({
  Intersection: elements.intersection(),
});
console.log({
  difference: elements.difference(),
});
console.log({
  symenticDifference: elements.symenticDifference(),
});
