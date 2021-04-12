//setTimeout


// var task=()=>{
//     setTimeout(()=>{
//         console.log("after");
//     },2000);
// };
// //pauses for the amount of time
// task();
// console.log("before");

//set interval

// var task=()=>{
//     setInterval(() => {
//         console.log("execute");
//     }, 1000);
// };

var count=0;

function task(){
    console.log("execute");
    count++;
    if(count===10){
        clearInterval(id);
        return;
    }
}

var id=setInterval(task, 1000);
console.log("after");

