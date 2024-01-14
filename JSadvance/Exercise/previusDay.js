function previusDay(year,month,day){
        let theDate=new Date(year,month-1,day);
        let curDate=new Date(theDate.getTime()-24*60*60*1000);

       let prevYear=curDate.getFullYear();
       let prevMonth=curDate.getMonth()+1;
       let prevDay=curDate.getDate()

       console.log(`${prevYear}-${prevMonth}-${prevDay}`);
     
}
previusDay(2016, 12, 30)
