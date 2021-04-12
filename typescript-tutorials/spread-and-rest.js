function names(a,b){
    console.log(a);
    console.log(b);
    for(var i=2;i<arguments.length;i++){
        console.log(arguments[i]);
    }
}

names(1,2,3,4,5,6,7,8,9,0);

var arr=[1,2,3,4,5,6,7,8];
