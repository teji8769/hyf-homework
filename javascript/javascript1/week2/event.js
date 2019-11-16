
 function getEventWeekDay(date){
    let weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
    let day =  date.getDay();
    return weekDays[day];  
}
 var date = new Date();
 var weekDay = getEventWeekDay(date);

 var eventDate = new Date("December 15 , 2019");
 var eventDay = getEventWeekDay(eventDate);
 var calculation = Math.round((eventDate - date)/(1000*60*60*24));

 console.log(`Today is ${weekDay} , event is in ${calculation} days.Event is on ${eventDay}`);

  


 
