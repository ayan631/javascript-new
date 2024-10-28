# javascript-new
A new code repo for learning js from scratches

# Default Nature of JavaScript:
1. JavaScript is a single-threaded asnchronous language but its default behaviour is synchronous. Being single-threaded, it is comparatively slow in performance and execusion speed than other languages. But important fact is it doesn't feel so.  

2. JavaScript executes a single line of code at a time.
    Each operation waits for the last one to complete before executing.   

# How does Js execute a code?
A JS program is executed in two phases- i.Global Execusion Context;  ii.Function Execusion Context.

# Blocking code vs Non-blocking code:
Blocking code actually blocks the normal flow of the program until the current operation is completed. E.g.: Read a file synchronously. Here the program execusion will be waiting untill the read operation is completed.

Non-Blocking code doesn't hampour the normal flow of the program.
E.g.: Read a file asynchronously. Here the program will be executed with its normal flow and read operation will also be performed asynchronously.

# Node env. vs Browser env:
If you are using a web environment to execute your javascript program, you'll get DOM API. But, if you are using Node environment, you will not get DOM API there.

# DOM:-
Window object: It is a global object with lots of properties and functions.
Whenever we open a new tab in a browser, it is the browser who creates the window object and not the javascript.
Document Object Model is a Tree like structure that represents the entire html document. Each and every html tag is treated as a node in DOM.

We can access our html file with the help of javascript's "window.document" object and its thousands of properties and functions.






# Task Queue and Promise Queue:
JavaScript uses a task queue, which makes it very fast.
Promises in JavaScript use a different high-priority queue, also known as Promise Queue.