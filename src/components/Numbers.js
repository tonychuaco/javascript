import React from 'react';

const Numbers = () => 
<section>
  <h2>Numbers</h2>
	<ul>
		<li>Values with Number data type</li>
		<ul>
			<li>Primitive number values are literals.</li>
			<li><code>NaN</code></li>
			<li><code>Infinity</code></li>
		</ul>
		<li>Precision</li>
		<ul>
			<li>Integers (numbers without a period or exponent notation) are accurate up to 15 digits.</li>
			<li>The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate. To solve the problem, multiply to a whole number and divide back to the original value.</li>
		</ul>
		<li>Other notes about number</li>
		<ul>
			<li>In JavaScript, numbers are always 64-bit floating point.</li>
			<li>JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.</li>
		</ul>
		<li>Numbers can be defined as Objects: var x = new Number(value);</li>
	</ul>
</ul>

</section>

export default Numbers;