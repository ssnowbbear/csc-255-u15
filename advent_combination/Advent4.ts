const data : string[] = require('fs').readFileSync(0, 'utf8').trim().split(',');

function invalid(x: number) : boolean {
    let s = x.toString();
    return s.substring(0, s.length/2) === s.substring(s.length/2);
}
for (const val of data) {
    const [start, end] = val.split('-').map(Number);
    for(let i=start; i<=end; i++) {
        if(invalid(i)) ans.push(i);
    };
};

function chunkString(s: string, size:number): string[] {
    const out:string[] = [];
    for(let i=0; i<s.length; i+=size) {
        out.push(s.slice(i, i+size));
    }
    return out;
};

function ans// missing some code, is different for this solution!!!
//adventcode website!!!

//do some on your own!!! % = remainder as well!!!