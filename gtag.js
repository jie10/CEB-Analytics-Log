/**
 * Track JS error details in Universal Analytics
 */

function trackJavaScriptError(e) {
  var errMsg = e.message
  var errSrc = e.filename + ': ' + e.lineno
  ga('send', 'event', 'JavaScript Error', errMsg, errSrc, {'nonInteraction': 1})
}

/**
 * Cross-browser event listener
 */

if (window.addEventListener) {
  window.addEventListener('error', trackJavaScriptError, false)
} else if (window.attachEvent) {
  window.attachEvent('onerror', trackJavaScriptError)
} else {
  window.onerror = trackJavaScriptError
}

/**
 * Capture Ajax call error using jQuery
 *
 * an AngularJS alternative
 * http://stackoverflow.com/questions/11971213/global-ajax-error-handler-with-angularjs
 * http://www.codelord.net/2014/06/25/generic-error-handling-in-angularjs/
 */

$(document).ajaxError(function (e, request, settings) {
  var errMsg = settings.url
  var errSrc = e.result

  ga('send', 'event', 'Ajax error', errMsg, errSrc, {'nonInteraction': 1})
})

/**
 * Global exception handeling within AngularJS
 * http://stackoverflow.com/questions/13595469/how-to-override-exceptionhandler-implementation
 */

var mod = angular.module('testApp', [])

mod.factory('$exceptionHandler', function () {
  return function (exception, cause) {
    // alert(exception.message);
    trackJavaScriptError(exception)
  }
})