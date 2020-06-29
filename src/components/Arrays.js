import React from 'react';

const Arrays = () => 
<section>
  <h2>Arrays</h2>
  <ul>
	<li>Array literal</li>
	<ul>
		<li>the syntax: <code>var</code> <i>array_name</i> <code>= [</code><i>item1</i><code>,</code> <i>item2</i><code>,</code> <i>...</i><code>];</code></li>
		<li>Declaring an empty array: <code>var</code> <i>array_name</i> <code>= [];</code></li>
	</ul>
	<li>Array constructor using <code>new Array()</code></li>
	<li>Refer to the <b>index number</b> using the bracket notation to access an array element</li>
	<ul>
		<li>The first array element has index <code>0</code></li>
		<li>The last array element has index <code>length-1</code></li>
	</ul>
	<li>Add the assignment operator <code>=</code> to set the value</li>
	<li>Refer to the array name to access the full array</li>
	<li>Array has <code>object</code> type</li>
	<li><i>Associative Arrays</i> have <i>named indexes</i> instead of <i>numbered indexes</i>. Currently JavaScript doesn't support associate arrays and will treat as objects instead, so some array methods and properties will produce unexpected results.</li>
	
</ul>
</section>

export default Arrays;