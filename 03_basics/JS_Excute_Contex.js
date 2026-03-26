JavaScript Excute Context

     In JavaScript, an execution context is an abstract concept that
holds information about the environment in which the current code
is being executed. It includes details about variables, functions, 
and the scope chain. There are three main types of execution contexts:

1. Global Execution Context: This is the default context where your code 
   starts executing. It creates a global object (window in browsers) and 
   a special variable called 'this' that refers to the global object.

2. Function Execution Context: Whenever a function is invoked, a new 
   execution context is created for that function. This context contains
   information about the function's parameters, local variables, and the
   value of 'this' within that function.

3. Eval Execution Context: This context is created when code is executed 
   using the eval() function. It has its own scope and can access variables 
   from its parent execution context.