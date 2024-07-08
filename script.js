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

    switch(day) {
        case 3: 
            if (minutes % 2 === 0) {
                alert("Alarm! It's Wednesday and it's an even minute.");
            }
            break;
        default:
            break;
    }
}
setInterval(checkAlarm, 60000);