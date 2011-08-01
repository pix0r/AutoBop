AutoBop
=======

Auto-headbop mode for http://turntable.fm.  After run, will press the "AWESOME!" button automatically once every 15 seconds.

How to use
----------

 * Drag the link on http://pixor.net/AutoBop to your bookmarks bar
 * Load up your http://turntable.fm page, make sure the AWESOME! button is present
 * Click the AutoBop! bookmark
 * Profit

Building
--------

The bookmarklet process includes a few steps:

 * Ensure that there are no double-quotes (") in your source code (use single quotes instead) (I'm sure this can be fixed with some scripting or changing the encoding, but I'm lazy)
 * Pass the script through JSMin
 * Remove newlines from the minified code
 * Embed directly in an anchor tag
