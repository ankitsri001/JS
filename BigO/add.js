const {performance} = require('perf_hooks');

addupToN=(n)=>{
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
const t1=performance.now();
addupToN(1000000000);
const t2=performance.now();;
console.log(`Time elapsed: ${(t2-t1)/1000} sec`);