const a = [1, 2, 3];

const result = a

     // x is will be the array and i the index ex. x = 1, i = 0
     .map((x, i) => x * 2)

     // filter checks everything and return what condition want. 
     // Using Boolean which answer true or false. 
     // So the condition is if the value is true it will return the value. if false it will not return the value.
     .filter(Boolean)

     // reduce combines all elements into a single value
     // acc is accumulator and initial value is 3. So the first time it will be 3 + 2 = 5, then 5 + 4 = 9, then 9 + 6 = 15
     // x is the current value of tha array processed. So the first time it will be 2, then 4, then 6.
     .reduce((acc, x) => acc + x, 3);

     return acc;