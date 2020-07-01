import React from 'react';

const Conditions = () =>
<section className="container-fluid">
  <h2>Conditions</h2>
  <h5>If</h5>
  <pre>
    <code>
{`
if (condition) {
  // code block
} else if (condition) {
  // code block
} else {
  // code block
}
`}
    </code>
  </pre>

<h5>Switch</h5>
<pre>
    <code>
{`
switch (condition) {
  case 1:
    // code block
  case 2:
  case 3:
    // code block
    break;
  default:
    // code block
}
`}
    </code>
  </pre>
</section>

export default Conditions;