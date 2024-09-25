// code your solution here

// function saturdayFun(activity = 'roller-skate'){
//     return('This Saturday, I want to ${activity}!');
// }
// function mondayWork(activity = 'go to the office'){
//     return('This Monday, I will ${activity}');
// }
// function wrapAdjective(){
//     function wrapAdjective(flair = '*') {
//         return function(adjective = 'special') {
//           return `You are ${flair}${adjective}${flair}!`;
//         };
//     }
    
// }
// Function to define activities on Saturday
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function to define activities on Monday
  function mondayWork(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
  }
  
  // Function to wrap adjectives with visual flair
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }



