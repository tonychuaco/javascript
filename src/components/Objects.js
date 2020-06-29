import React from 'react';

const Objects = () => 
<section>
  <h2>Objects</h2>
  <ul>
	<li><b>Objects</b>: are a data type that let us store a collection of properties and methods. Objects can contain many values and written inside curly braces <code>{}</code> as <i>name:value</i> pairs separated by a coma <code>,</code> (but not after the last value).</li>
	<ul>
		<li>Syntax: <code>var</code> <i>identifier</i> <code>= {</code> "<i>propertyName</i>"<code>:</code> <i>value</i>,"<i>propertyName</i>"<code>:</code> <i>value</i> <code>};</code></li>
		<li><i>Object Definition</i> essentially refers to a JavaScript object defined with an object literal</li>	
	</ul>
	<li><b>Properties</b>: in an object, variables become known as properties. Properties are expressed as <i>name:values</i> pairs. The name is called a <b>key</b>. Properties can be accessed by:</li>
		<ul>
			<li><b>Dot notation</b> <i>objectName</i><code>.</code><i>propertyName</i><code>;</code></li>
			<li><i>Bracket notation</i> <i>objectName</i><code>["</code><i>propertyName</i><code>"];</code></li>
		</ul>
	<li><b>Methods</b>: in an object, functions become known as methods. Methods are <i>actions</i> that can be performed on objects and can be stored in properties as <i>function definitions</i>. It can be accessed by:</li>
		<ul>
			<li><i>Dot notation</i> e.g. <i>objectName.methodName();</i></li>
			<li><i>objectName.methodName;</i><code>// returns the function definition instead</code></li>
			<li><i>Square bracket</i> syntax e.g. <i>objectName["methodName"]();</i></li>
		</ul>
	<li>The dot or bracket notations can be used to change an existing property or add a new one</li>
		<ul>
			<li><b>Dot notation</b> <i>objectName</i><code>.</code><i>propertyName</i> <code>= value;</code></li>
			<li><i>Bracket notation</i> <i>objectName</i><code>["</code><i>propertyName</i><code>"] = value;</code></li>
		</ul>
	<li>They can also be used to add new properties</li>
	<li><code>this</code> keyword: refers to the object of the selected function</li>
	<li><code>new</code> keyword: any variable declared with this keyword will be created as object</li>
	<li><code>delete</code> keyword can be used to delete a property</li>
</ul>

{/* // Objects #1
var $var = new Object();

var $var = {
  $label: $data,
  $label: $data,
  $label: $data,
  updateViews: function() {
    return ++$var.$label;
  }
}

console.log( $var.$label );
$var.updateViews();
console.log( $var.$label );

// Objects #2 Constructors
function Course($label, $label, $label) {
  $var.$label = $label;
  $var.$label = $label;
  $var.$label = $label;
  updateViews: function() {
    return ++$var.$label;
  };
}
var $varY = [
   new Course( $data, $data, $data);
   new Course( $data, $data, $data);
];

console.log($varY[$index].$label); 

Constructor
Prototypes
Inheritance

*/}

</section>

export default Objects;