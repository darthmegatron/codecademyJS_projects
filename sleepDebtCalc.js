const getSleepHours = day => {
  switch (day) {
    case 'sunday':
      return 7;
      break;
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    default:
      return 'I\'m going to need you to pick a day.'
  }
};


const getActualSleepHours = () => {
 let daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
 let total = 0
 for (let day in daysOfWeek) {
   total += getSleepHours(daysOfWeek[day]);
 }
 return total;
};


// Optionally takes a number as an arg for the hours of ideal nightly sleep, defaults to 8 if no arg provided
const getIdealSleepHours = (idealHours = 8) => {
  return idealHours * 7;
};


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  // Ternary operator to check actual sleep vs ideal sleep
  (actualSleepHours === idealSleepHours) ? console.log('You got the perfect amount of sleep.') : (actualSleepHours > idealSleepHours) ? console.log('You got more sleep than you needed.') : console.log('You need to get more rest.');
  console.log(`Actual Sleep: ${actualSleepHours}`);
  console.log(`Ideal Sleep: ${idealSleepHours}`);
};


calculateSleepDebt();
