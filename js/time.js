let t = null;
t = setTimeout(time,1000)
function time (){
   if(t){
       clearTimeout(t);
   }
   document.querySelector(".showTime").innerHTML = `当前时间:${dayjs().year()}年${dayjs().month()}月${dayjs().day()}日${dayjs().hour()}时${dayjs().minute()}分${dayjs().second()}秒`
   t = setTimeout(time,1000);
}