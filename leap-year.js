function isLeapYear(year){
    if(year % 4 == 0)
    {
       if(year % 100 == 0)
       {
          if(year % 400 == 0)
          {
             return true;
          }
          else
          {
             return false;
          }
       }
       else
       {
          return true;
       }
    }
    else
    {
       return false;
    }
}

const myYear = 2100;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is my year leap year',isMyYearLeapYear);


const yourYear = 2024;
const isYourYearLeapYear = isLeapYear(yourYear);
console.log('is your year leap year',isYourYearLeapYear);
