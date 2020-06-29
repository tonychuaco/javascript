import React from 'react';

const Scope = () => 
<section>
  <h2>Scope</h2>
  <ul>
	<li>Two types:</li>
	<ul>
		<li><b>Global</b> variable has <i>global scope</i> by creating it outside a function.</li>
		<li><b>Function scope</b> are <b>local</b> or <i>function-level</i> within a function. Also called to have <i>local scope</i> or <i>function-level scope</i>.</li>
	</ul>
	<li>Functions and objects are also variables; therefore, the concept of scope also applies</li>
	<li>Undeclared variables have automatically global scope</li>
	<li>Global variables are not created automatically in "Strict Mode"</li>
	<li>In HTML, the global scope is the window object. All global variables belong to the window object.</li>
	<li>Best practice is to create local scope as possible</li>
	<li>Local variables are deleted when the function is completed. Global variables are deleted when the browser window is closed, but remains to new pages loaded into the same window.</li>
	<li>Function Arguments (parameters) work as local variables inside functions.</li>
</ul>
  {/*

Variables
Attributes | var             | const | let
--------------------------------------------
scope      | global or local | block | block
redeclare? | yes             | no    | no
reassign?  | yes             | no    | yes
hoisted?   | yes             | no    | no

Object.freeze(x) // makes it immutable

*/}
</section>

export default Scope;