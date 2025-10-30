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

function dmndCut(size:number):number{
    //minimum size
    const cantCut = 2;

    //check size 
    console.log(`Start size: ${size} carats.`);

    //when cannot cut any further
    if(size <= cantCut){
        console.log(`Size is too small: ${size}.`)
        return 1;
    }

    //the sizes 
    const size1 = Math.floor(size * (3/5));
    const size2 = Math.floor(size * (2/5));

    //split sizes
    console.log(`Split into: size 1 = ${size1} & size 2 = ${size2}.`)

    if(size1 == 0 && size2 == 0) {
        return 1;
    }

    //recurse on non-zero piece
    let count = 0;
    if(size1 > 0){
        //checking sizes
        console.log(`Size 1 = ${size1}.`)
        count += dmndCut(size1)
    }
    if(size2 > 0){
        //checking sizes
        console.log(`Size 2 = ${size2}.`)
        count += dmndCut(size2)
    }

    //total number of diamonds 
    console.log(`Total: ${count} from ${size} carats.`)
    return count;
};

console.log(`Total diamonds cut:`,dmndCut(10));

// 2) New way to cut diamonds. Sizes 3/5ths,2/5ths,1/5th 
function dmndCut2(size:number):number{
    //minimum size
    const cantCut = 2;

    //check size 
    console.log(`Start size: ${size} carats.`);

    //when cannot cut any further
    if(size <= cantCut){
        console.log(`Size is too small: ${size}.`)
        return 1;
    }

    //the sizes 
    const size1 = Math.floor(size * (3/5));
    const size2 = Math.floor(size * (2/5));
    const size3 = Math.floor(size * (1/5));

    //split sizes
    console.log(`Split into: size 1 = ${size1} & size 2 = ${size2} & ${size3}.`)

    if(size1 == 0 && size2 == 0 && size3 == 0) {
        return 1;
    }

    //recurse on non-zero piece
    let count = 0;
    if(size1 > 0){
        //checking sizes
        console.log(`Size 1 = ${size1}.`)
        count += dmndCut2(size1)
    }
    if(size2 > 0){
        //checking sizes
        console.log(`Size 2 = ${size2}.`)
        count += dmndCut2(size2)
    }
    if(size3 > 0){
        //checking sizes
        console.log(`Size 3 = ${size3}.`)
        count += dmndCut2(size3)
    }

    //total number of diamonds 
    console.log(`Total: ${count} from ${size} carats.`)
    return count;
};

console.log(`Total diamonds cut:`,dmndCut2(10))
//output is 7, incorrect output.
//cantCut = 1 still outputs 7.
//could not figure out how to get 9 diamonds. the math aint mathing

//3) N % 3 == 0, minSize + 1
function dmndCut3(size: number, minSize:number):number{
    //Start size
    console.log(`Start size: ${size}`)

    //when size is too small
    if(size <= minSize){
        console.log(`Base case: size ${size} <= ${minSize}. Count 1.`);
        return 1;
    }

    //update minSize
    let nextMin = minSize
    if(size % 3 == 0){
        nextMin += 1;
        console.log(`Next min size raised to ${nextMin}`)
    };

    const size1 = Math.floor(size * (3/5));
    const size2 = Math.floor(size * (2/5));

    console.log(`${size} split into ${size1} and ${size2}`)

    //make sure pieces are good
    if(size1 == 0 && size2 ==0){
        return 1;
    }

    //continue
    let count = 0;

    //size1
    if(size1 > 0) {
        if(size <= nextMin) {
            console.log(`Piece 1 (${size1}) too small to be cut`);
            count += 1;
        }
        else {
            console.log(`Piece 1 (${size1}) going forward with minimum size of ${nextMin}`);
            count += dmndCut3(size1, nextMin);
        }
    }

    //size2
    if(size2 > 0) {
        if(size2 <= nextMin) {
            console.log(`Piece 2 (${size2}) too small to be cut`);
            count += 1;
        }
        else {
            console.log(`Piece 2 (${size2}) going forward with minimum size of ${nextMin}`);
            count += dmndCut3(size2, nextMin);
        }
    }
    console.log(`Total count for size ${size} is ${count}`)
    return count;
};

console.log(`Total count:`,dmndCut3(10,2))