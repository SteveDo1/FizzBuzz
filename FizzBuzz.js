
const Fizz = "Fizz",
Buzz = "Buzz",
FizzBuzz = "FizzBuzz";


//A For Loop that iterates from 1 to 100 and determines if a number is divisible by 3, 5 and both 3 & 5.
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) 
        console.log(FizzBuzz);
    else if (i % 3 == 0) 
        console.log(Fizz);
    else if (i % 5 == 0) 
        console.log(Buzz);
    else console.log(i);
}