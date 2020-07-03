import React from 'react';

const Functions = () => 
<section className="container-fluid">
  <h2>Function</h2>
<pre>{`
Function Definition:

  function functionName(parameters) {
    // code block
    return x;
  }

Calling a function:

  functionName(arguments);

Anonymous Function:

  function() {
    // code block
  }

Arrow Function:

  () => {
    // code block
  }

Function Expression: 

  const x = function() {
    // code block
  }

Immediately Invoked Function Expressions:

  const x = (function(){
    // code block
  }());				

Constructor Functions: to create a new prototype with custom methods

  function FunctionName(parameters) {
    // code block
  }

`}</pre>

</section>

export default Functions;