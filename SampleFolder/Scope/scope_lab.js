// Global scope
var globalVar="I'm a global variable";
let globalLet="I'm also global, but scoped with let";
const globalConst="I'm a global constant";

{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block Scope
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();

//console.log(functionVar); // Throws ReferenceError
//console.log(functionLet); // Throws ReferenceError
//console.log(functionConst); // Throws ReferenceError

{
    var testVar="a var in block";
    let testLet="a let in block";
    const testConst="a const in block";

    testVar="new var in block";
    testLet="new let in block";
    //testConst="new const in block";
    console.log(testVar);
    console.log(testLet);
    //console.log(testConst);
}

    testVar="new var outside block";
    console.log(testVar);
    testLet="new let outside block";
    console.log(testLet);
    testConst="new const outside block";
    console.log(testConst);