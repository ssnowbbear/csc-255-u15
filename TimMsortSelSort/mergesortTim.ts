//prcondition: arrs are sorted
function merge(arr1:number[],arr2:number[]):number[]{
    let[arr1P,arr2P] = [0,0]
    
    let arr:number[] = []

    while (arr1P<arr1.length && arr2P<arr2.length){
        if (arr1[arr1P]<arr2[arr2P]){
            arr.push(arr1[arr1P])
            arr1P++
        }
        else{
            arr.push(arr2[arr2P])
            arr2P++
        }
    }
    if (arr1P == arr1.length) arr.push(...arr2.slice[arr2P]);
    if (arr2P == arr2.length) arr.push(...arr1.slice[arr1P]);

    return arr1;
};

function msort(arr:number[]):number[]{
    let arrays = arr.map(x=>[x])
    let today:number[][]=[]
    while (arrays.length>1){
        while (arrays.length>1){
            let popped1 = arrays
            today.push(merge(arrays.pop()!,arrays.pop()!))
        }
        if(arrays.length==1)today.push(arrays[0])
        arrays = today
        today = []
    }
    return arrays[0]
};

//look online for the rest of code, start scrolling alot

//if you hold alt, you can move a whole line with the arrow keys