# AutoBop

Auto-headbop mode for [Turntable.fm](https://turntable.fm). After run, will press the "AWESOME!" button automatically once every 15 seconds.

## How to use

- Drag this link into your bookmarks bar: [AutoBop!](#)
- Load up your [Turntable](https://turntable.fm) page, make sure the AWESOME! button is present
- Click the AutoBop! bookmark
- Profit

## Getting the code

Source code is available: [AutoBop on GitHub](https://github.com/pix0r/AutoBop)

The bookmarklet process includes a few steps:

- Ensure that there are no double-quotes (&quot;) in your source code (use single quotes instead) (I'm sure this can be fixed with some scripting or changing the encoding, but I'm lazy)
- Pass the script through [JSMin](http://www.crockford.com/javascript/jsmin.html)
- Remove newlines from the minified code
- Embed directly in an anchor tag: `<a href="your-minified-bookmarklet">AUTOBOP!</a>`
