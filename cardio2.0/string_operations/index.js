class StringOperations {
    constructor(str) {
        this.str = str;
    }

    // Capitalized First Letter

    capitalizedFirstLetter() {
        if (typeof this.str === "string") {
            const updatedStr = this.str.split(" ").map(str => (
                str.charAt(0).toUpperCase() + str.slice(1)
            ))
            return updatedStr.join(" ")
        }
        return "Please pass valid string !!";

    }
}

const stringTest = new StringOperations("ajeet kumar jha living in new delhi !!!")

console.log({
    stringTest: stringTest.capitalizedFirstLetter()
});