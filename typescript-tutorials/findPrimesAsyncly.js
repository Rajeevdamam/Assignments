var findPrimes=(start,end)=>{
    console.log("prime numbers for numbers from " + start +" to "+end);
    var isPrime=false;
    for(var i=start;i<=end;i++){
        for(var j=2;j<i;j++){
            if(i%j===0){
                isPrime=true;
                break;
            }
        }
        if(isPrime===false){
            console.log(i);
        }else{
            isPrime=false;
        }
    }
}



setTimeout(findPrimes, 10,2,100);
setTimeout(findPrimes, 10,2,100000);
setTimeout(findPrimes, 10,2,10);

