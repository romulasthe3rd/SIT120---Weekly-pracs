var HelloWorld = "Hello World";

console.log(HelloWorld);

//Making the text all upper case
console.log(HelloWorld.toUpperCase());

//Slicing the variable HelloWorld to just "World"
console.log(HelloWorld.slice(6,11));

//Returns a specific character within the text
console.log(HelloWorld.charAt(4));

//Using the substring function to 
var List = "Soccer, Basketball, Golf, Netball";
console.log(List.substr(8,10));

//Using substring method to get "Soccer" - similar to slicing
console.log(List.substring(0, 6));

//TASK 2 

var array_str = ["Buggati", "Ferrari", "Lamborghini"];
var array_num = [10, 30, 20];

//Array Methods - string type 
console.log(array_str);
console.log(array_str.pop());                                                                                                                                                                                                       
console.log(array_str.length);
console.log(array_str.push("Astin Martin"));

//Array methods - integer type
console.log(array_num);
console.log(array_num.unshift());
console.log(array_num.sort());                                                                                                                                                                                        