function clothes(temp) {
    if(temp >= 35){
        console.log("wear cotton clothes and stay hydrated!!");
        console.log("weather is hot");
    }
    else if(temp >= 23 && temp < 35){
        console.log("*Casual wear*");
        
           
    }else if(temp < 23 && temp >= 17){
        console.log("Hoodie or sweatshirt is required.");
    }else if(temp < 17 && temp >= 10){
        console.log("Winter jacket is required along with shoes.");   
    }else if(temp >= 0 && temp < 10){
        console.log("Along with winter jacket thermals,glouses,scarf are compulsary.");
        console.log("Weather is freezing cold");
            
    }   
}
clothes(35);
console.log("\n");
clothes(6);
console.log("\n");
clothes(25);

