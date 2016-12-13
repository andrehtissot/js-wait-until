/*!
 * Generic wait until something happen function v1.0-callback
 * This version uses callbacks instead of Promise.
 * https://github.com/andrehtissot/js-wait-until
 * 
 * Copyright André Augusto Tissot
 * Released under the MIT license
 *
 * Date: 2016-12-13
 */
var waitUntil = function(testFunction, tries, successCalback,
  failureCallback, intervalInMiliseconds){
  var tries = tries || -1;
  var successCalback = successCalback || function(){};
  var failureCallback = failureCallback || function(){};
  var intervalId = setInterval(function(){
    if(testFunction()) {
      clearInterval(intervalId);
      successCalback();
    } else if(--tries === 0) {
      clearInterval(intervalId);
      failureCallback();
    }
  }, intervalInMiliseconds || 50);
}
