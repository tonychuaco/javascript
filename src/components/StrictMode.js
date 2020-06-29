import React from 'react';

const StrictMode = () => 
<section>
  <h2>StrictMode</h2>
  <ul>
	<li><code>"use strict";</code> indicates that the code should be executed in strict mode.</li>
	<li><code>"use "strict</code> directive is only recognize at the <i>beginning</i> of a script or a function.</li>
	<li>It can be declared in global or local scope</li>
	<li>Not Allowed in Strict Mode</li>
	<ul>
		<li>Using an object, without declaring it, is not allowed</li>
		<li><code>delete</code> a variable, object, function, or undeletable property is not allowed</li>
		<li>Duplicated parameter name is not allowed</li>
		<li>Octal numeric literals and octal escape characters are not allowed</li>
		<li>Writing to a read-only property is not allowed</li>
		<li>Writing to a get-only property is not allowed</li>
		<li><code>eval</code> and <code>arguments</code> cannot be used as a variable</li>
		<li><code>with</code> statement is not allowed</li>
		<li><code>eval()</code> is not allowed to create variables in the scope from which it was called</li>
		<li><code>this</code> will return <code>undefined</code> in strict mode if the object is not specified</li>
		<li>Keywords reserved for upcoming JavaScript versions can not be used as variable names in strict mode.</li>
	</ul>
</ul>
</section>

export default StrictMode;