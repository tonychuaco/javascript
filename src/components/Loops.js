import React from 'react';

const Loops = () => 
<section>
  <h2>Loops</h2>
<h3>Types of Loops</h3>
<h4><code>while</code> loop</h4>
<pre>
  <code>
    // initiliaze condition;
    while (condition) {
      // code blocks;
      // update condition value;
    }
  </code>
</pre>
<h4><code>do...while</code> loop</h4>
<pre>
  <code>
    // initialize;
    do {
      // code blocks;
      // update condition value;
    } while (condition);
  </code>
</pre>
<h4><code>for</code> loop</h4>
<pre>
  <code>
    for (initialize; condition; update condition) {
      // code blocks;
    }
  </code>
</pre>
<h4><code>for...of</code> loop: iterator for each values</h4>
<pre>
  <code>
    for (var i of arr) {
      // code blocks;
    }
  </code>
</pre>
<h4><code>for...in</code> loop: iterator for all values of each properties</h4>
<pre>
  <code>
    for (var i in obj) {
      // code blocks;
    }
  </code>
</pre>
<p>Notes: Loops can be nested.</p>
<h3>Interrupt</h3>
<ul>
  <li><code>break x;</code> statement, where optional x is the labelName</li>
  <li><code>continue x;</code> statement, where optional x is the labelName</li>
</ul>

</section>

export default Loops;