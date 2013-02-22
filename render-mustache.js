/**
 * render-mustache
 *
 * This module implements support for rendering [Mustache](http://mustache.github.com/)
 * templates using [mustache.js](https://github.com/janl/mustache.js).
 */
define(['mustache'],
function(Mustache) {
  
  /**
   * Setup Mustache template engine.
   *
   * When rendering, this engine returns a compiled template function which can
   * be cached for performance optimization.
   *
   * Examples:
   *
   *     render.engine('text/template', mustache());
   *
   * @return {Function}
   * @api public
   */
  return function() {
    
    return function(str) {
      return Mustache.compile(str);
    }
  }
  
});
