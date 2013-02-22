# jQuery Placeholder Plugin

Emulates the HTML5 Placeholder attribute in browsers that don't have native support.

Making this plugin as small as possible while keeping good functionality is the main focus. At just 258 bytes minified & gzipped, its small enough to inline.

Using this plugin is very easy. Just:

    <input type="text" placeholder="This is my text">

And then:

    $('input[type=text]').placeHolder();

And your done! Want to see a [working example](http://jsfiddle.net/matthewbj/WPaSg/)?

This plugin will check for native browser support of the HTML5 Placeholder attribute and will not run if supported.
