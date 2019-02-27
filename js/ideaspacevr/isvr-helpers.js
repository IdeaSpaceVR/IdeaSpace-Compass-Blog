function ready (callback) {

    if (document.readyState != 'loading') {

        // in case the document is already rendered
        callback();

    } else if (document.addEventListener) {

        // modern browsers
        document.addEventListener('DOMContentLoaded', callback);

    } else document.attachEvent('onreadystatechange', function() {

        // IE <= 8
        if (document.readyState == 'complete') {
						callback();
				}
    });
}


function bind (fn, ctx/* , arg1, arg2 */) {

		return (function (prependedArgs) {
        return function bound () {
          // Concat the bound function arguments with those passed to original bind
          var args = prependedArgs.concat(Array.prototype.slice.call(arguments, 0));
          return fn.apply(ctx, args);
        };
		})(Array.prototype.slice.call(arguments, 2));
}

