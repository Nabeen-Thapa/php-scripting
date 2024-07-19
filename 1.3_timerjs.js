function DateTime(){
    let today = new Date();
    let year = today.getFullYear();
  
    let month = today.getMonth();
    if (month< 10) {
        month = '0' + month;
      }
    let today_date = today.getDate();
    if (today_date< 10) {
      today_date = '0' + today_date;
    }
    
    let hour = today.getHours();
    let zone = 'PM';
    if (hour<12) {
      zone = 'AM';
    }
    if (hour< 10) {
      hour = '0' + hour;
    }
    let minute = today.getMinutes();
    if (minute< 10) {
      minute = '0' + minute;
    }
    let second = today.getSeconds();
    if (second< 10) {
      second = '0' + second;
    }
  
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = today.getDay();
  
    document.getElementById('clock').innerHTML = 
    `${year}-${month}-${today_date} ${hour}:${minute}:${second} ${zone} ${days[day]}`;
    setTimeout(DateTime, 1000);
  }
  
  DateTime();