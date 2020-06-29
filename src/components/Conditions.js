import React from 'react';

const Conditions = () => 
<section>
  <h2>Conditions</h2>
  <ul>
	<li>Without a comparison or logical operator, JS tries to figure out if the value is "truth-y"</li>
	<li>"false-y" values includes conditions that return false, the empty string (""), the number 0, undefined, and null.</li>
	<li><code>if</code> Statement: specify a block of JavaScript code to be executed if a condition is true.</li>
	<ul>
		<li><samp><code>if (</code><i>condition</i><code>) {</code><br>
		<i>// block of code</i><br>
		<code>}</code></samp></li>
	</ul>
	<li><code>else</code> Statement: specify a block of code to be executed if the condition is false.</li>
	<ul>
		<li><samp><code>else {</code><br>
		<i>// block of code</i><br>		
		<code>}</code></samp></li>
	</ul>
	<li><code>else if</code> Statement: specify a new condition if the first condition is false.</li>
	<ul>
		<li><samp><code>else if (</code><i>condition</i><code>) {</code><br>
		<i>// block of code</i><br>
		<code>}</code></samp></li>
	</ul>
</ul>
<h5>Switch</h5>
<ul>
	<li>Syntax</li>
	<ul>
		<li>
		<code>switch(</code><i>expression</i><code>) {</code><br>
		  <code>case</code> <i>x</i><code>:</code><br>
			<i>// code block</i><br>
			<code>break;</code><br>
		  <code>case</code> <i>y</i><code>:</code><br>
			<i>// code block</i><br>
			<code>break;</code><br>
		  <code>default:</code><br>
			<i>// code block</i><br>
		<code>}</code> 
		</li>
	</ul>
	<li><code>break</code> keyword is optional and let jump out from running the rest of the cases</li>
	<li><code>default</code> keyword is optional and specifies when there is no case match</li>
	<li>Multiple cases can share the same code block</li>
	<ul>
		<li>
		<code>switch(</code><i>expression</i><code>) {</code><br>
		  <code>case</code> <i>x</i><code>:</code><br>
			<i>// code block</i><br>
			<code>break;</code><br>
		  <code>case</code> <i>y</i><code>:</code><br>
		  <code>case</code> <i>z</i><code>:</code><br>
			<i>// code block</i><br>
		<code>}</code> 		
		</li>
	</ul>
	<li><code>switch</code> statement uses <i>strict</i> comparison <code>===</code>, so the <i>expression</i> must be equal in value and type with the <i>case</i></li>
</ul>
</section>

export default Conditions;