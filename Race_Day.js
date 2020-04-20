// Created by Paul A. Gureghian in April 2020 //
// This JS project app registers runners for Codeacadmy's annual race //
// And gives them instructions on race day //
// Key concepts covered here are 'Control Flow & If/else Statements //

// Declare a flexible variable for 'raceNumber'
let raceNumber = Math.floor(Math.random() * 1000);

// Declare a flexible variable for whether a runner registered early or not.
// The value will be a Boolean. 
let runnerRegistered = true;

// Declare a flexible variable for the runner's age.
let runnersAge = 0;

// Define a control flow statement that checks whether the runner is an adult AND registered early.
if (runnerRegistered && runnersAge > 18) {
    raceNumber += 1000;
}  

