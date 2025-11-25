console.log(require('fs').readFileSync.trim().split(/\s+/).map(Number).reduce((a, b) => a + b));
// have to use --target esnext
