function selsort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var smallest = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[smallest])
                smallest = j;
        }
    }
    return arr;
}
//n^2
