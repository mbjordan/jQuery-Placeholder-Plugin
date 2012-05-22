# jQuery Placeholder Plugin

### 283 bytes minified & gzipped

Emulates the HTML5 Placeholder attribute in browsers without native support with a focus on minimalism. See a [working example](http://jsfiddle.net/matthewbj/WPaSg/).

Using this plugin is very easy. Just:

    <input type="text" placeholder="This is my text">

And then:

    $('input[type=text]').placeHolder();

And your done!

This plugin will check for native browser support of the HTML5 Placeholder attribute and will not run if supported.
