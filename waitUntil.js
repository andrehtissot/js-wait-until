/*!
 * Generic wait until something happen function v1.0
 * https://github.com/andrehtissot/js-wait-until
 *
 * Copyright André Augusto Tissot
 * Released under the MIT license
 *
 * Date: 2016-12-12
 */
var waitUntil = function(testFunction, tries, intervalInMiliseconds){
  var tries = tries || -1;
  return new Promise(function(resolve, reject){
    var intervalId = setInterval(function(){
      if(testFunction()) {
        clearInterval(intervalId);
        resolve();
      } else if(--tries === 0) {
        clearInterval(intervalId);
        reject();
      }
    }, intervalInMiliseconds || 50);
  });
}
