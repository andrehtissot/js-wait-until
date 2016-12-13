/*!
 * Generic wait until something happen function v1.0-legacy
 * This version mimics Promise for old browsers when Promise is not available
 * https://github.com/andrehtissot/js-wait-until
 *
 * Copyright André Augusto Tissot
 * Released under the MIT license
 *
 * Date: 2016-12-13
 */
var waitUntil = function(testFunction, tries, intervalInMiliseconds){
  var tries = tries || -1;
  if(window.Promise){
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
  } else {
    var fakePromise = {
      resolve: null,
      reject: null,
      then: function(resolve,reject){
        this.resolve = resolve;
        this.reject = reject;
        return this;
      },
      catch:function(reject){
        this.reject = reject;
        return this;
      }
    };
    var intervalId = setInterval(function(){
      if(testFunction()) {
        if(fakePromise.resolve === null) { return; }
        clearInterval(intervalId);
        if(fakePromise.resolve)
          fakePromise.resolve();
      } else if(--tries === 0) {
        if(fakePromise.reject !== null) {
          clearInterval(intervalId);
          if(fakePromise.reject)
            fakePromise.reject();
        }
        tries++;
      }
    }, intervalInMiliseconds || 50);
    return fakePromise;
  }
}
