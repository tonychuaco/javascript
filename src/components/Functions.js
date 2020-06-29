import React from 'react';

const Functions = () => 
<section>
  <h2>Functions</h2>
  <ul>
	<li>JavaScript <i>Function Definition</i>: declaring a function</li>
	<li><b>Function Declaration</b>: creates a function that can be called later in the code. This type of functions is also called <b>named function</b> because it must be given a name.</li>
		<ul>
			<li><code>function</code> keyword</li>
			<li><i>Name</i> (also called <i>identifier</i>)</li>
			<li>Parentheses <code>()</code></li>
			<li>Parameters vs. Arguments</li>
				<ul>
					<li><b>parameters</b>: are identifier names listed optionally inside the parentheses <code>()</code> in the function definition, separated by commas. They have no type checking, and don't even have to match the number of arguments that are used when the function is called. The parameter variables are visible only within the function.</li>
					<li><b>arguments</b>: are the <i>values</i> received by the function when it is invoked.</li>
				</ul>
			<li>Code blocks of <i>statements</i> enclosed in curly braces <code>{}</code></li>
		</ul>
	<li>Any variables used only within the function should be declared within the function using <code>var</code> keyword to make sure they are not confused with global variables.</li>
	<ul>
		<li><code>let</code> keyword declares a variable with block level scope.</li>
		<li><code>const</code> keyword can be used instead if the variable is immediately initialized and is a constant.</li>
	</ul>
	<li>The <code>return</code> keyword</li>
		<ul>
			<li>Stops the function from executing</li>
			<li>Returns <i>value</i> (also known as <b>return value</b>) to one of the three "callers" above</li>
			<li>You may choose to return one item of data or not return anything. Since JavaScript deals with objects easily, the one item of data returned could be an object or array containing many individual items.</li>
		</ul>
	<li><b>Calling</b>: Invoking a function.</li>
		<ul>
			<li>Syntax: <i>functionName</i><code>(</code><i>argumentList</i><code>);</code></li>
			<li>A function is <i>invoked</i></li>
				<ul>
					<li>When an event occurs. e.g. <code>onmouseover</code>, <code>onmouseout</code>, <code>onclick</code></li>
					<li>When it is invoked (called) from JavaScript code</li>
					<li>Automatically (self invoked)</li>
				</ul>
			<li>The argument list is a comma separated list of variable names or values. You may skip an argument in the list by using the value "undefined" for it. The argument list is optional and the number of arguments sent does not have to match the number of parameters specified in the function definition.</li>
			<li>Arguments which are basic variable types (string, number, boolean) are sent to the function by-value. This means that copies of the value are sent and the original variable can not be changed by the function.</li>
			<li>Arguments which are not basic variable types (objects, arrays) are sent to the function by-reference. This means the original variable can be changed by the function.</li>
			<li>The names of the arguments sent and the parameters received does not have to match.</li>
			<li>Since the number of parameters doesn't have to match the number of arguments sent, every function has a list of the arguments sent to it stored in an array-like object named "arguments". This allows functions to easily handle variable length argument lists.</li>
		</ul>
	<li>Function name with () Operator invokes the Function and refers to the function result. Accessing a function without () refers to the function as an object and will return the function definition instead.</li>
	<li>Functions Can be Used as Variable Values.</li>
	<li>If the interpreter would treat the function as an expression instead, it is also called as <b>function expression</b>. Since the name is usually omitted, it is also called as <b>anonymous function</b>. E.g. if the function is assigned to a variable or passed as an arguemnt.</li>
	<ul>
		<li>E.g.<br>
			<samp>
				var z = function(x,y){<br>
					return x + y<br>
				};<br>
				var a = z(1,2);
			</samp>
		</li>
	</ul>
	<li><b>Immediately Invoked Function Expressions (IIFE)</b> are anonymous functions that are executed immediately.</li>
		<ul>
			<li><b>Final parentheses</b>: after the closing curly brace of the code block tell the interpreter to call the function immediately.</li>
			<li><b>Grouping operators</b>: are parentheses there to ensure the intrepreter treats this as an expression.</li>
			<li>E.g.<br><samp>
					var z = (function(){<br>
						var x = 1;<br>
						var y = 2;<br>
						return x + y;<br>
					}());				
				</samp></li>
		</ul>
</ul>
{/* Named functions

function $function( $argument, $argument) {
  var $var;
  
  return $var;
}

Anonymous functions

var $varX = $dataX;
var $varY = $dataY;

var $function = function() {
  var $varZ;
  
  console.log($varZ);
}

Invoked functions (calling)

var $varY = (function( $argument, $argument) {
  var $varX;

  return $varX;
})( $argument, $argument )

Parameters
Arguments
Arrow Functions

Constructor Functions: to create a new prototype with custom methods
function ExampleFunction() {

}

*/}
</section>

export default Functions;