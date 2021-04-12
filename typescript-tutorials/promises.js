function divide(x,y){
    let promise=new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(y!=0){
                resolve(x/y);
            }else{
                reject("y cannot divide x");
            }
        }, 2000);
    });
    return promise;
}

function testDivide(a,b){
    let promise=divide(a,b);
    promise
    .then(result=>{console.log(result);})
    .catch(err=>{console.log(err);});
}


testDivide(20,6);
testDivide(20,0);
testDivide(2,6);

console.log("Please wait calculating");



