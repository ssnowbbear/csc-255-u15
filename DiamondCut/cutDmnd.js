//diamond cutting. starts at 10 carrats.
//can be cut into 3/5th or 2/5th sizes.
//10 to 3/5ths -> 6. 10 to 2/5ths -> 4
//6 to 3/5ths = 18/5ths -> 3.
//3 to 3/5ths = 9/5ths -> 1 (ENDS).
//3 to 2/5ths = 6/5ths -> 1 (ENDS). 
//6 to 2/5ths = 12/5ths -> 2(ENDS).
//4 to 3/5ths = 12/5ths -> 2 (ENDS). 
//4 to 2/5ths = 8/5ths -> 1 (ENDS).
//Cutting (use integer division)
function dmndCut(size) {
    //minimum size
    var cantCut = 2;
    //check size 
    console.log("Start size: ".concat(size, " carats."));
    //when cannot cut any further
    if (size <= cantCut) {
        console.log("Size is too small: ".concat(size, "."));
        return 1;
    }
    //the sizes 
    var size1 = Math.floor(size * (3 / 5));
    var size2 = Math.floor(size * (2 / 5));
    //split sizes
    console.log("Split into: size 1 = ".concat(size1, " & size 2 = ").concat(size2, "."));
    if (size1 == 0 && size2 == 0) {
        return 1;
    }
    //recurse on non-zero piece
    var count = 0;
    if (size1 > 0) {
        //checking sizes
        console.log("Size 1 = ".concat(size1, "."));
        count += dmndCut(size1);
    }
    if (size2 > 0) {
        //checking sizes
        console.log("Size 2 = ".concat(size2, "."));
        count += dmndCut(size2);
    }
    //total number of diamonds 
    console.log("Total: ".concat(count, " from ").concat(size, " carats."));
    return count;
}
;
console.log("Total diamonds cut:", dmndCut(10));
// 2) New way to cut diamonds. Sizes 3/5ths,2/5ths,1/5th 
function dmndCut2(size) {
    //minimum size
    var cantCut = 2;
    //check size 
    console.log("Start size: ".concat(size, " carats."));
    //when cannot cut any further
    if (size <= cantCut) {
        console.log("Size is too small: ".concat(size, "."));
        return 1;
    }
    //the sizes 
    var size1 = Math.floor(size * (3 / 5));
    var size2 = Math.floor(size * (2 / 5));
    var size3 = Math.floor(size * (1 / 5));
    //split sizes
    console.log("Split into: size 1 = ".concat(size1, " & size 2 = ").concat(size2, " & ").concat(size3, "."));
    if (size1 == 0 && size2 == 0 && size3 == 0) {
        return 1;
    }
    //recurse on non-zero piece
    var count = 0;
    if (size1 > 0) {
        //checking sizes
        console.log("Size 1 = ".concat(size1, "."));
        count += dmndCut2(size1);
    }
    if (size2 > 0) {
        //checking sizes
        console.log("Size 2 = ".concat(size2, "."));
        count += dmndCut2(size2);
    }
    if (size3 > 0) {
        //checking sizes
        console.log("Size 3 = ".concat(size3, "."));
        count += dmndCut2(size3);
    }
    //total number of diamonds 
    console.log("Total: ".concat(count, " from ").concat(size, " carats."));
    return count;
}
;
console.log("Total diamonds cut:", dmndCut2(10));
//output is 7, incorrect output.
//cantCut = 1 still outputs 7.
//could not figure out how to get 9 diamonds. the math aint mathing
//3) N % 3 == 0, minSize + 1
function dmndCut3(size, minSize) {
    //Start size
    console.log("Start size: ".concat(size));
    //when size is too small
    if (size <= minSize) {
        console.log("Base case: size ".concat(size, " <= ").concat(minSize, ". Count 1."));
        return 1;
    }
    //update minSize
    var nextMin = minSize;
    if (size % 3 == 0) {
        nextMin += 1;
        console.log("Next min size raised to ".concat(nextMin));
    }
    ;
    var size1 = Math.floor(size * (3 / 5));
    var size2 = Math.floor(size * (2 / 5));
    console.log("".concat(size, " split into ").concat(size1, " and ").concat(size2));
    //make sure pieces are good
    if (size1 == 0 && size2 == 0) {
        return 1;
    }
    //continue
    var count = 0;
    //size1
    if (size1 > 0) {
        if (size <= nextMin) {
            console.log("Piece 1 (".concat(size1, ") too small to be cut"));
            count += 1;
        }
        else {
            console.log("Piece 1 (".concat(size1, ") going forward with minimum size of ").concat(nextMin));
            count += dmndCut3(size1, nextMin);
        }
    }
    //size2
    if (size2 > 0) {
        if (size2 <= nextMin) {
            console.log("Piece 2 (".concat(size2, ") too small to be cut"));
            count += 1;
        }
        else {
            console.log("Piece 2 (".concat(size2, ") going forward with minimum size of ").concat(nextMin));
            count += dmndCut3(size2, nextMin);
        }
    }
    console.log("Total count for size ".concat(size, " is ").concat(count));
    return count;
}
;
console.log("Total count:", dmndCut3(10, 2));
