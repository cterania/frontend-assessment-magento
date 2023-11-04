<h2>Magento Frontend Developer Technical Assessment </h2>
<p>I have completed the two front-end exercises and the project files inside this repository.</p>

<h3>Folder Structure</h3>
<pre><code><b>assessment-cterania</b>
    │   exercise-1.html
    │   exercise-2.html
    │   index.html
    │
    ├───<b>css</b>
    │       styles.css
    │       styles.css.map
    │
    ├───<b>data</b>
    │       data.json
    │
    ├───<b>img</b>
    │       banner-1920x650.png
    │       banner-600x600.png
    │       grid-400x300.png
    │
    ├───<b>js</b>
    │       script.js
    │
    └───<b>scss</b>
            styles.scss
            _base.scss
            _main.scss
            _responsive.scss
            _variables.scss
</code></pre>

<p>The root folder is <b>assessment-cterania</b> which contains all the project files and folders and also the main page (<b>index.html</b>). Then we have the <b>css</b> folder which contains the CSS files available to all pages within the project, some of the main files are as follows:</p>
<ol>
    <li><b>data</b> - This folder is used to hold data files containing page specific information</li>
    <li><b>img</b> - This contains all the images</li>
    <li><b>js</b> - This folder contains the script file (<i>script.js</i>) that runs on Exercise-2 page to implement the Tabs and Accordion</li>
    <li><b>scss</b> - This folder contains all the SCSS files. In there, you can find the reset file, typographic rules, global variables, mixins, styles for commonly used HTML elements and some page-specific styles.<br><br>I am using VS Code as my code editor and installed <b>Live SASS Compiler</b> extension to compile SASS file.</li>
</ol>

<b><span style="background-color: #ff7979;">Important Note:</span> Kindly load the project through a web server since loading it via file:// won't have the permissions to load a json file.</b>

<h3>Bonus Question</h3>
<p>Explain why the result of <code>(&#39;b&#39; + &#39;a&#39; + + &#39;a&#39; + &#39;a&#39;).toLowerCase()</code> is <code>banana</code>.</p>
<h3>Solution:</h3>
<p>Breaking down the expression <code>(&#39;b&#39; + &#39;a&#39; + + &#39;a&#39; + &#39;a&#39;)</code> into its components. then applying <code>.toLowerCase()</code> function.</p>
<ol>
    <li><code>'b' + 'a'</code> Returns 'ba'. (string concatenation)</li>
    <li><code>'ba' + + 'a'</code> Returns <code>NaN</code> (Not a Number). The second <code>+</code> is a unary operator which tries to convert the value <code>'a'</code> into a number, but it cannot be converted.</li>
    <li><code>'baNaN' + 'a'</code>returns <code>baNaNa</code>. (string concatenation)</li>
    <li>Returned <code>banana</code> after applying .toLowerCase() function to <code>baNaNa</code></li>
</ol>