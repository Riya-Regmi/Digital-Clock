function getStart(){
    document.getElementById("button").style.display='none';
    setInterval(getTimeShown,1000);

}

function getTimeShown(){
    var date=new Date();
    var weekdays=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    var monthNames=['Jan','Feb','Mar','Apr','May','June','July','Aug','Sep','Oct','Nov','Dec']
    var dayName=weekdays[date.getDay()];
    var today=date.getDate();
    var year=date.getFullYear();
    var month=monthNames[date.getMonth()];
    var hours=date.getHours();
    var minute=date.getMinutes();
    var seconds=date.getSeconds();
    var amtopm = "";
    if(seconds<10){
        seconds="0"+seconds;
    }
    if(minute<10){
        minute="0"+minute;
    }
    if(hours==0){
        hours=12;
        amtopm="AM";
    }
    if(hours>12){
        hours=hours-12;
        amtopm="PM";
    }
    if(hours<10){
        hours="0"+hours;
    }
    var time=hours+" : "+minute+" : "+seconds+" "+amtopm;
    var fullDate=today+", "+month+" "+year;
    document.getElementById("day").innerText=dayName;
    document.getElementById("time").innerText=time;
    document.getElementById("date").innerText=fullDate;


}

