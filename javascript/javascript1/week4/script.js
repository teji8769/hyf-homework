let name = '';
const todo = [];
const favDish = [];
const events = [];
const months =['January' , 'February' ,'March' , 'April' , 'May' , 'June' , 'July' , 'August' , 'September' , 'October' , 'November' , 'December'];

function response(command) {
    
    //Hello my name is Benjamin - Should save the name benjamin. and respond with "nice to meet you Benjamin". What if someone writes this twice?
    //What is my name - should respond with the name of the person. What if the name has not yet been mentioned?

    if (command.includes('Hello my name is ')) {
        if (name) {
            return 'Once again nice to meet you ' + name   
        } else {
            name =command.slice (17, command.length);
            return 'Nice to meet you '+ name
            
        }
    } else if (command.includes('what is my name')) {
        if (name) {
            return 'Your name is ' + name;
        }else{
            return'Please enter your name';
        }
    }

    //Add fishing to my todo - Should respond with "fishing added to your todo". Should add fishing to a list of todos
    //Add singing in the shower to my todo - Should add singing in the shower to a list of todos
    //Remove fishing from my todo - Should respond with "Removed fishing from your todo"
    //What is on my todo? - should respond with the todos. Fx you have 2 todos - fishing and singing in the shower
    else if (command.includes('Add ') || command.includes('to my todo')) {
        const thing = command.slice(4, command.length - 10);
        todo.push(thing);
        return todo[todo.length -1] + 'added to a list of todo';
    }
    else if(command.includes('Remove') || command.includes('from my todo')){
        const remove = command.slice(6, command.length - 7);
        todo.splice(todo.includes (remove), 1);
        return 'Removed' + remove + 'from your todo'
    }

    //What day is it today? - Should respond with the date in a human readable format. E.g. if today is 30/8/2019 then it should respond with 30. of August 2019

    else if(command.includes('What day is it today')){
        const today = new Date();
        const date = today.getDate();
        const year = today.getFullYear();
        const month = months[today.getMonth()];
        return 'Today is '+ date + 'th of ' + month + ' ' + year
    }

    //Should be able to do simple math. fx what is 3 + 3 should respond with 6. Or what is 4 * 12 should respond with 48

    else if (command.includes('what is ') && command.includes('+') || command.includes('-') || command.includes('*') || command.includes('/')) {
        const mathResult = command.slice(8 , command.length);
        if (command.includes('+')) {
            return 'Addition is ' + eval(mathResult); //eval() evaluates code
        }else if(command.includes('-')) {
            return 'Substraction is ' + eval(mathResult);
        }else if (command.includes('*')) {
            return 'Multiplication is ' + eval(mathResult);
        }else if (command.includes('/')) {
            return 'Division is ' + eval(mathResult);
        }
    }

    //My favorite dish is lasagne - should save the user's favorite dish as lasagne.
    //What is my favorite dish - should respond with the favorite dish
    else if (command.includes('My favorite dish is lasagne')) {
        favDish.push (command.slice(20, command.length));
        return 'Your favorite dish is saved as lasagne'
    }
    else if (command.includes('What is my favorite dish')) {
        return 'Your favorite dish is ' + favDish;
    }

    //Set a timer for 4 minutes - Should respond with "Timer set for 4 minutes". When 4 minutes is up: "Timer done". 
    //How do we set a timer in js? Google is your friend here!

    else if (command.includes('set a timer for 4 minutes')) {
        const minutes = command.slice(16 , 18);
        const minutesInMsec = minutes * 60 * 1000;
        
        setTimeout (function () {
            console.log('timer stopped');
        }, minutesInMsec);
    
    return 'Timer is set for ' + minutes + ' minutes'
    }  

    //Add Bike ride the 3/5/2019 to my calendar - Should respond with "Bike ride added to your calendar". Should add an event represented by an object with keys name and date to an array of events.
    //What am I doing this week? - should respond with the events for that week. Fx "This week you have 1 event: Bike ride the 3. of May 2019"
    
   else if (command.includes(' to my calender')) {
       const event = command.slice(4, command.indexOf('the')-1);
       const date = command.slice(command.indexOf('the') + 3,command.indexOf('to') -1);
       events.push({
           event,
           date,
        });
        console.log(events);
        return events[events.length - 1].event + 'added to your calender';
   }

}
console.log(response('what is my name'));
console.log(response('Hello my name is teja'));
console.log(response('what is my name'));
console.log(response('Hello my name is teja'));
console.log(response('Add fishing to my todo'));
console.log(response('Add singing in the shower to my todo'));
console.log(response('Remove fishing my todo'));
console.log(response('What day is it today'));
console.log(response('what is 3+3'));
console.log(response('My favorite dish is lasagne'));
console.log(response('What is my favorite dish'));
console.log(response('set a timer for 4 minutes'));
console.log(response('Add Bike ride on 3/5/2019 to my calendar'));

