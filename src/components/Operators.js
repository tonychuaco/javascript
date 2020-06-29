import React from 'react';

const Operators = () => 
<section>
  <h2>Operators</h2>
	<ul>
		<li><b>Arithmetic Operators</b></li>
		<ul>
			<li>Lists</li>
				<ul>
					<li>Addition <code>+</code></li>
					<li>Subtraction <code>-</code></li>
					<li>Multiplication <code>*</code></li>
					<li>Exponentiation <code>**</code></li>
					<li>Division <code>/</code></li>
					<li>Modulus / Remainder <code>%</code></li>
					<li>Increment <code>++</code></li>
					<li>Decrement <code>--</code></li>
				</ul>
			<li>Operator Precedence</li>
				<ul>
					<li>Operators with equal precedence will be computed from left to right.</li>
					<li>Operator with higher precedence will be computed first.</li>
					<li>Parentheses <code>( )</code> operator has the highest precendence value, so the operations inside the parentheses are computed first.</li>
				</ul>
		</ul>
		<li><b>Assignment Operators</b></li>
		<ul>
			<li><code>=</code></li>
			<li><code>+=</code></li>
			<li><code>-=</code></li>
			<li><code>*=</code></li>
			<li><code>/=</code></li>
			<li><code>%=</code></li>
			<li><code>**=</code></li>
		</ul>
		<li><b>String Operators</b> (<b>Concatenation</b> Operator)</li>
		<ul>
			<li><code>+</code></li>
			<li><code>+=</code></li>
			<li>Adding two numbers, will return the sum, but adding a number and a string will return a string. The order also matters. Using other arithmetic operators will return a not a number value <code>NaN</code></li>
		</ul>
		<li><b>Comparison Operators</b></li>
		<ul>
			<li>Equal To (in Value) <code>==</code></li>
			<li>Equal Value and Equal Type <code>===</code></li>
			<li>Not Equal (in Value) <code>!=</code></li>
			<li>Not Equal Value or Not Equal Type <code>!==</code></li>
			<li>Greater Than <code>&gt;</code></li>
			<li>Less Than <code>&lt;</code></li>
			<li>Greater Than or Equal To <code>&gt;=</code></li>
			<li>Less Than or Equal To <code>&lt;=</code></li>
			<li>Ternary Operator <code>?</code>.</li>
				<ul>
				<li><i>variablename</i> <code>=</code> <code>(</code><i>condition</i><code>) ? </code><i>value1</i><code>:</code><i>value2</i><code>;</code></li>
				</ul>
			<li>Comparing Different Data Types May Return Unexpected Results</li>
			<ul>
				<li>When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison.</li>
				<li>An empty string converts to 0.</li>
				<li>A non-numeric string converts to <code>NaN</code> which is always <code>false</code>.</li>
				<li>When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2, returns <code>true</code>.</li>
			</ul>
		</ul>
		<li><b>Logical Operators</b></li>
		<ul>
			<li>Logical and <code>&amp;&amp;</code></li>
			<li>Logical or <code>||</code></li>
			<li>Logical not <code>!</code></li>
		</ul>
		<li><b>Type Operators</b></li>
		<ul>
			<li><code>typeof</code> returns the type of a variable</li>
			<li><code>instanceof</code> returns true if an object is an instance of an object type</li>
		</ul>
	<li><b>Bitwise Operators</b></li>
		<ul>
			<li>AND <code>&amp;</code></li>
			<li>OR <code>|</code></li>
			<li>NOT <code>~</code></li>
			<li>XOR <code>^</code></li>
			<li>Zero fill left shift <code>&lt;&lt;</code></li>
			<li>Signed right shift <code>&gt;&gt;</code></li>
			<li>Zero fill right shift <code>&gt;&gt;&gt;</code></li>
		</ul>
	</ul>

{/* Arithmetic Operators 
Unary Operator: ++ --
Logical Operators: ** || && !
Ternary Operators: condition ? true : false
a == b ? console.log("Match") : console.log("No match");

Conditional statements
 * if ( $condition ) {}
 * comparison operators == <= >= !==
 * switch

Destructuring Assignment (array and objects)

Spread Operators

*/}
  
</section>

export default Operators;