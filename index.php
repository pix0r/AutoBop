<?php

$jsfile = "dj-bookmarklet.js";
exec("cat $jsfile | jsmin/jsmin", $lines);
$jsmin = implode($lines);
$js = file_get_contents($jsfile);

?><html>
	<body>
		Drag to bookmarks: 
		<a href="javascript:<?php echo $jsmin ?>">AWESOME!</a>
		<br />
		Code: 
		<pre><?php echo htmlspecialchars($js); ?></pre>
	</body>
</html>

