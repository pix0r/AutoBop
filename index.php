<?php

$jsfile = "autobop.js";
exec("cat $jsfile | jsmin/jsmin", $lines);
$jsmin = implode($lines);
$js = file_get_contents($jsfile);

?><html>
<head>
<title>AutoBop</title>
<link href="http://alexgorbatchev.com/pub/sh/current/styles/shCore.css" rel="stylesheet" type="text/css" />
<link href="http://alexgorbatchev.com/pub/sh/current/styles/shThemeDefault.css" rel="stylesheet" type="text/css" />
<script src="http://alexgorbatchev.com/pub/sh/current/scripts/shCore.js" type="text/javascript"></script>
<script src="http://alexgorbatchev.com/pub/sh/current/scripts/shAutoloader.js" type="text/javascript"></script>
<script src="http://alexgorbatchev.com/pub/sh/current/scripts/shBrushJScript.js" type="text/javascript"></script>
</head>
<body>
	<h1>AutoBop</h1>
	<p>Auto-headbop mode for <a href="http://turntable.fm">Turntable.fm</a>.  After run, will press the "AWESOME!" button automatically once every 15 seconds.</p>
	<h3>How to use</h3>
	<ul>
		<li>Drag this link into your bookmarks bar:<br /><br /><strong><a href="javascript:<?php echo $jsmin ?>">AutoBop!</a></strong><br /><br /></li>
		<li>Load up your <a href="http://turntable.fm">Turntable</a> page, make sure the AWESOME! button is present</li>
		<li>Click the AutoBop! bookmark</li>
		<li>Profit</li>
	</ul>
	<h3>Getting the code</h3>
	<p>Source code is available: <a href="https://github.com/pix0r/AutoBop">AutoBop on Github</a></p>
	<p>The bookmarklet process includes a few steps:</p>
	<ol>
		<li>Ensure that there are no double-quotes (&quot;) in your source code (use single quotes instead) <em>(I'm sure this can be fixed with some scripting or changing the encoding, but I'm lazy)</em></li>
		<li>Pass the script through <a href="http://www.crockford.com/javascript/jsmin.html">JSMin</a></li>
		<li>Remove newlines from the minified code</li>
		<li>Embed directly in an anchor tag: <code>&lt;a href=&quot;your-minified-bookmarklet&quot;&gt;AUTOBOP!&lt;/a&gt;</code></li>
	</ol>

</body>
</html>

