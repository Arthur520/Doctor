function js_date_time(unixtime) {
  var dateTime = new Date(parseInt(unixtime));//注意，此处unixtime是接收到的原生数据，不需要做任何处理，网上有些代码写的是需要乘以1000，亲测不需要乘以1000，注意注意！！！！！！！！
  console.log(dateTime.getUTCFullYear());

  var year = dateTime.getFullYear();
  var month = (dateTime.getMonth() + 1 < 10 ? '0' + (dateTime.getMonth() + 1) : dateTime.getMonth() + 1);
  var day = dateTime.getDate() < 10 ?  dateTime.getDate() : dateTime.getDate();
  var hour = dateTime.getHours();
  var minute = dateTime.getMinutes();
  var second = dateTime.getSeconds();
  var now = new Date();
  var now_new = Date.parse(now.toDateString()); //typescript转换写法
  var milliseconds = now_new - dateTime;

  if (day < 10) {
    day = '0'+day;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (second < 10) {
    second = '0' + second;
  }
  var timeSpanStr = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' + second;
  return timeSpanStr;
}
module.exports = {
  js_date_time: js_date_time
}
