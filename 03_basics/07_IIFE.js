//Immediately Invoked Function Execusion (IIFE):-

// Normal Function:
(function function1(name) {
    console.log(`Hi ${name}, We are inside function1`);
})("Ayan");   // providing a semicolon in mandatory here // 


// Arrow Function:
((name) => console.log(`Hi ${name}, We are inside function2`)) ("Aaiswaryya")
