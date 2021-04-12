
// var plus=(function (x,y){
//     var count=0;
//     console.log(x+y);
//     return function(){
//         count++;
//         return count;
//     }
    
// })();

function plus(a,b){
    var count=0;
    console.log(a+b);
    function inner(){
        return ++count;
    }
    return inner;
}


plus(1,2);
plus(2,3);
var plus=plus(3,4);

console.log(plus);



// var plus=(function(x,y){
//     var count=0;
//     var res=x+y;
//     return {
//         res,times: function(){
//             return ++count;
//         }
//     };
// });


// console.log(plus(2,4).times());
