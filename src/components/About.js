import React from 'react';

const About = () => 
<section>
  <h2>About</h2>
  <ul>
	<li>Types of Programming</li>
	<ul>
		<li>High-Level Language. E.g. Java</li>
		<li>Assembly Language</li>
		<li>Machine Code</li>
	</ul>
	<li>Classifications of Languages</li>
	<ul>
		<li>High-Level vs. Low-Level. E.g. Java vs JS</li>
		<li>Compiled vs. Interpreted. E.g. Java, C, C++ vs. Python, PHP, Ruby, JS</li>
		<li>Structured vs. Object Oriented, e.g. JS uses Properties and Methods with DOM</li>
		<li>Programming vs. Scripting E.g. Java vs JS, which is easier and can be client or server side, but less versatile and fewer features</li>
	</ul>
	<li>Fundamental Concepts</li>
	<ul>
		<li>Objects: The nouns of the language</li>
		<ul>
		<li>Properties: attributes or state of objects, expressed as a pair (name: value)</li>		
		<li>Methods: The verbs of the language that define the behaviors of objects</li>
		<ul>
		<li><b>Member Operator</b> (<code>.</code>)</li>
		<li>Parameters ( ... )</li>
		</ul>
		</ul>
		<li>Instances: incarnations of objects</li>
		<li>Events and Events Handlers</li>
	</ul>
	<li>Progressive Enhancement approach - Webpage layers:</li>
	<ul>
		<li>*Content: HTML</li>	
		<li>*Presentation: CSS</li>	
		<li>*Behavior: JavaScript</li>	
	</ul>
	<li>Flowchart Keys (Whiteboarding):</li>
	<ol>
		<li>Generic Step</li>
		<li>Event</li>
		<li>Input / Output</li>
		<li>Decision</li>
	</ol>
</ul>
<h5>JavaScript</h5>
	<ul>
		<li>Can Change HTML Content</li>
		<li>Can Change HTML Attribute Values</li>
		<li>Can Change HTML Styles (CSS)</li>
		<li>Can Hide HTML Elements</li>
		<li>Can Show HTML Elements</li>
		<li>Image switchers and lightboxes</li>
		<li>Full featured web applications</li>
		<li>Keep track of users with cookies</li>
		<li>Interactive elements like tabs, sliders and accordions</li>
		<li>Drawing and animation</li>
	</ul>
<ul>
	<li>External: &lt;script src=&quot;&quot;&gt;&lt;/script&gt;</li>
	<li>Internal</li>
	<li>Inline</li>
</ul>

	{/* <li>Style Guide</li>
	javascript coding conventions

variable names: camelCase
spaces around operators
code indentation: 2 spaces

statement rules
General rules for simple statements:
Always end a simple statement with a semicolon.

General rules for complex (compound) statements:
    Put the opening bracket at the end of the first line.
    Use one space before the opening bracket.
    Put the closing bracket on a new line, without leading spaces.
    Do not end a complex statement with a semicolon.

object rules
line length < 80
naming conventions
loading javascript in html
accessing html elements
file extensions
use lower case file names
performance */}


</section>

export default About;