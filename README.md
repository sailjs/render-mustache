# Sail / Render-Mustache

This module provides an engine for rendering [Mustache](http://mustache.github.com/)
templates in [Sail.js](https://github.com/sailjs/sail) applications.  Internally,
[mustache.js](https://github.com/janl/mustache.js) is used to render templates.

## Install

##### component

    $ component install sailjs/render-mustache

##### volo

    $ volo add sailjs/render-mustache

## Usage

Register engine with [render](https://github.com/sailjs/render) to process
Mustache templates:

```javascript
render.engine('text/x-mustache-template', mustache());
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
