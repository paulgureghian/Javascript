// Created by Paul A. Gureghian in April 2020 //
// This JS project app calculates the amount of sleep you get each week //

// Define a function which calculates the amount of sleep in any given night.
const getSleepHours = (day) => {

    if (day === "monday") {

        return 8;
    
    } else if (day === "tuesday") {

        return 7;
    
    } else if (day === "wednesday") {

        return 8;
    
    } else if (day === "thursday") {

        return 7;
    
    } else if (day === "friday") {

        return 7;
    
    } else if (day === "saturday") {

        return 6;
    
    } else if (day === "sunday") {

        return 6;
    
    } 
        
    return "Error";

};

// Define a function which gets the total actual sleep hours. //
const getActualSleepHours = () => {
 
    getSleepHours("monday") +
    getSleepHours("tuesday") +
    getSleepHours("wednesday") +
    getSleepHours("thursday") +
    getSleepHours("friday") +
    getSleepHours("saturday") +
    getSleepHours("sunday");

};

//console.log(getActualSleepHours());

// Define a function for ideal sleep hours.
const getIdealSleepHours = () => {

    let idealHours = 8;
    
    return idealHours * 7;

};    

// Define a function which calculates the sleep debt.
const calculateSleepDebt = () => {

    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();

    if (actualSleepHours === idealSleepHours) {

        console.log("The user got the perfect amount of sleep.");
    
    } else if (actualSleepHours > idealSleepHours) {

        console.log(`The user got ${idealSleepHours - actualSleepHours} more sleep than needed.`);
    
    } else if (actualSleepHours < idealSleepHours) {

        console.log(`The user should get ${idealSleepHours - actualSleepHours} hours more sleep.`);
    
    }

    return "Error.";

};

// Call the 'calculateSleepDebt()'
calculateSleepDebt();

// End of script //