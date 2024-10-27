# javascript-new
A new code repo for learning js from scratches

# Default Nature of JavaScript:
1. JavaScript is a single-threaded snchronous lamguage. Being single-threaded, it is comparatively slow in performance and execusion speed than other languages. But important fact is it doesn't feel so.  

2. JavaScript executes a single line of code at a time.
    Each operation waits for the last one to complete before executing.   

# How does Js execute a code?
A JS program is executed in two phases- i.Global Execusion Context;  ii.Function Execusion Context.

# Blocking code vs Non-blocking code:
Blocking code actually blocks the normal flow of the program until the current operation is completed. E.g.: Read a file synchronously. Here the program execusion will be waiting untill the read operation is completed.

Non-Blocking code doesn't hampour the normal flow of the program.
E.g.: Read a file asynchronously. Here the program will be executed with its normal flow and read operation will also be performed asynchronously.