import React from 'react';

const Syntax = () => 
<section>
  <h2>Syntax</h2>
  <ul>
	<li>Values: can be <b>Literals</b> or <b>Variables</b></li>
	<li>Literals: are fixed values. They include <b>Numbers</b> and <b>Strings</b></li>
<li><b>Variables</b>: are used to store data values by first <i>declaring</i> it and then initialize by <i>assigning</i> or defining it a value. E.g. <samp>var x; x = 6;</samp></li>
		<ul>
			<li><code>var</code> keyword</li>
			<li>Name or <i>identifier</i></li>
			<li><b>Data Types</b>: is loose typing, meaning, JS figures out the data type based on value and can always change</li>
				<ul>
					<li><b>String</b>: an immutable string of characters, or simply text</li>
						<ul>
							<li>Strings are written inside double or single quotes</li>
							<li><b>Escaping</b>: using backwards slash <code>\</code></li>
							<li>JavaScript gives string data access to properties and methods</li>
							<li>The <code>length</code> property reports the size of the string</li>
							<li>Each character has an index starting at 0 and the last at length-1</li>
								<ul>
									<li><samp>console.log(x[2]);</samp></li>
									<li><samp>console.log(x[x.length]); // undefined</samp></li>
									<li><samp>console.log(x[x.length-2]);</samp></li>
								</ul>
							<li>Instead of primitive value, strings can be defined as objects using <code>new</code> keyword and string constructor <code>String()</code>. E.g. <samp>var x = new String("Hello World");</samp></li>
						</ul>
					<li><b>Number</b>: whole, or floating point (decimal)</li>
					<li><b>Boolean</b>: represents logical values <code>true</code> or <code>false</code></li>
						<ul>
							<li><code>Boolean()</code> function tests if an expression (or a variable) is true</li>
							<li>The Boolean value of an expression is the basis for all JavaScript <i>comparisons</i> and <i>conditions</i></li>
							<li>Everything With a "Value" is <code>true</code></li>
							<li>Everything Without a "Value" is <code>false</code>. E.g. <code>0</code>, <code>""</code>, <code>undefined</code>, <code>null</code>, <code>false</code>, <code>NaN</code></li>
							<li>Booleans can be defined as objects with the keyword <code>new</code>. E.g. <samp>var x = new Boolean(false);</samp></li>
								<ul>
								<li>Boolean values and Boolean objects are equal in values and return <code>true</code>, but not equal in values &amp; equal in types and return <code>false</code></li>
								<li>Comparing two Boolean objects will always return <code>false</code></li>
								</ul>
						</ul>
					<li><b>Undefined</b>: represents a value that hasn't been defined or assigned to a variable</li>
					<li>Null: Represents an explicitly empty value</li>
				<li><b>Array</b>: is a type of data-type that holds the ordered list of values, of any type. It is essentially a list or a set of related values. <code>var</code> <i>identifier</i> <code>= [</code><i>value</i><code>,</code><i>value</i><code>];</code></li>
				<ul>
					<li><b>Array Literal</b>: creates an array by assigning the values inside square brackets <code>[]</code> and separated with a comma <code>,</code></li>
					<li><b>Array Constructor</b>: creates an array using the <code>new</code> keyword followed by <code>Array();</code>. E.g. <samp>var x = new Array("a","b","c");</samp></li>
					<li><b>Index</b>: starts at zero</li>
					<li>Each array has a property called <code>length</code>, which holds the number of items in an array.</li>
 					<li>Array list items can be accessed with "bracket notation": <i>identifier</i><code>[</code><i>index</i><code>]</code></li>
					<li>Bracket notation can also be used to change an item in the array or add a new one: <i>identifier</i><code>[</code><i>index</i><code>] =</code> <i>value</i><code>;</code></li>
					<li><code>push()</code> method can also be used to add an item to the array</li>
				</ul>
				</ul>
			<li>Value or "null"</li>
			<li>Shorthand
			<ul>
				<li><samp>var x; // Undefined</samp></li>
				<li><samp>var x = 6; // Same as var x; x = 6;</samp></li>
				<li><samp>var x = 1, y = 2, z = 3; // Multiple Variables</samp></li>
				<li><samp>var x, y, z;</samp></li>
			</ul>
			</li>
			</ul>
	<li><b>Operators</b>: create a single value from one or more values. E.g. Arithmetic (+, -, *, /), Assignment (=), Comparison (&lt;,&gt;,==)</li>
	<li>Expressions</li>
	<ul>
	<li><b>Expression</b>: is like a complete sentence; the combination of values, variables and operators, which computes to a value.</li>
	<ul>
	<li>Expressions that just assign a value to a variable. E.g. <samp>var x = 5;</samp></li>
	<li>Expressions that use two or more values to return a single value. E.g. <samp>var x = 5 * 10;</samp></li>
	</ul>
	<li><i>Evaluation</i>: is the <b>calculation</b> or <b>computation</b> (the result). E.g. 50</li>
	</ul>
	<li><b>Keywords</b>: refers to all that are <i>reserved</i> for JavaScript</li>
	<li><b>Comments:</b></li>
	<ul>
		<li><code>//</code> for <b>single-line comments</b></li>
		<li><code>/* */</code> for <b>multi-line comments</b> </li>
	</ul>
	<li><i>Identifiers</i> (Variable Names): are names used to name variables, or simply unique names or unique variables</li>
	<ul>
		<li>First character must be a letter, underscore, or dollar sign</li>
		<li>Subsequent characters may be letters, digits, underscores, or dollar signs</li>
	</ul>
	<li>Case Sensitive: TRUE</li>
	<li>Camel Casing Options:</li>
	<ul>
		<li>Hyphens (are Reserved for Substractions)</li>
		<li>Underscore</li>
		<li>Pascal Case</li>
		<li>Camel Case</li>
	</ul>
	<li>JS Character Set: is in Unicode</li>
</ul>
</section>

export default Syntax;