// 1 Write a code to find area of rectangle
// INPUT : 
let lenght = 10;
let widht = 6;

// PROCESS
// formula area : lenght * widht
let result = lenght * widht;

// OUTPUT
console.log("Rectangle area >> ",result) 


// 2 write a code to find perimeter of rectangle
// INPUT : lenght, widht
lenghtA = 12
widhtA = 16
// PROCCES
// formula perimenter : 2 * (lenght + widht)
result = 2 * (lenghtA+widhtA);
// OUTPUT
console.log("Rectangle perimeter >>", result)

// 3 write a code to find a diameter, circumference and area of a circle
//INPUT AREA
let p = 22/7;
let jari = 7; 
Math.PI = p
// PROCESS
let diameter = 2 * jari
// formula area circle : p* r * r
result = p * jari * jari
//OUTPUT
console.log("Area Circle >>", result);
console.log("diameter circle >>", diameter);
//INPUT CIRCUMFERENCE
//formulacircumeference : 2 *p *r
result = 2 * p * jari
//OUTPUT
console.log("Circumeference circle >>", result);

//4 write a code to find angles of triangle if two angles are given
//INPUT
let angleA = 14;
let angleB = 7;
//PROCESS
let angleC = 42 - angleA - angleB;
//OUTPUT
console.log(angleC) 

//5 write a code to get difference betwwen days in days.
//INPUT
const DateA = new Date('2023-09-08');
const DateB = new Date('2023-09-12');
//PROCESS
const timeDifferenceMs = DateB - DateA;
const daysDifference = (timeDifferenceMs / (1000*60*60*24));
//OUTPUT
console.log(" difference day beetween d1 and d2 >>", daysDifference);

//6 write a code to convert days to years, months and date
//INPUT 
const days = 680
const daysInYears = 365;
const daysInMonths = 30;

//PROCESS
//
const years = days/daysInYears;
const months= days/daysInMonths;
//OUTPUT 
console.log(years)
console.log(months)