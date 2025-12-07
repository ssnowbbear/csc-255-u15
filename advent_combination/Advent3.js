"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data = require('fs').readFileSync(0, 'utf8').trim().split(',');
function invalid(x) {
    var s = x.toString();
    return s.substring(0, s.length / 2) === s.substring(s.length / 2);
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var val = data_1[_i];
        var _a = val.split('-').map(Number), start = _a[0], end = _a[1];
        for (var i = start; i <= end; i++) {
            if (invalid(i))
                ans.push(i);
        }
        ;
    }
    ;
}
