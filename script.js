// var x = 1
// var y = 2
// console.log("show me data ------>", x+y)

// if(x == y) {
//     console.log('if else----yes')
// }else {
//     console.log('if else---- no') 
// }

// if(x != y){
//     console.log("not condition yes")
// }


function checkAlarm() {
    const now = new Date();
    const day = now.getDay(); 
    const minutes = now.getMinutes();

    console.log("Current Day:", day); 
    console.log("Current Minutes:", minutes); 

    switch(day) {
        case 2: 
            if (minutes % 2 === 0) {
                alert("We're in the Endgame now.");
            }
            break;
        default:
            break;
    }
}
checkAlarm();
setInterval(checkAlarm, 60000);
