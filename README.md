# js-wait-until
Generic wait until something happen function

Useful to sync browser events, user interactions, and timed events when callbacks or promises are not available.

Demo: https://jsfiddle.net/andretissot/pz6efhgu/



By default `waitUntil`, with `tries = -1`, only stops when whatever you want to happen "happen".
If tries is set, it only will test if what you want happen `tries` times:
```js
var tries = 40;
```


By default `intervalInMiliseconds` is 50.
This defines how long it'll take between each test loop:
```js
var intervalInMiliseconds = 100;
```


The test function should return true if whatever you want have "happened" or false if it must keep waiting:
```js
var testFunction = function(){
  //Something, something...
};
```


For promise and legacy versions:
```js
waitUntil(testFunction, tries, intervalInMiliseconds)
.then(function(){
  //What you wanted to happen happened!
  //Congratulations!
}, function(){
  //What you wanted to happen never happened before tested if that "tries" times. 
  //Maybe it happened after, but who knows? Try increasing the "intervalInMiliseconds" and
  //  the "tries" values if you believe that it will actually happen.
});
```


For callback version:
```js
waitUntil(testFunction, tries, function(){
  //What you wanted to happen happened!
  //Congratulations!
}, function(){
  //What you wanted to happen never happened before tested if that "tries" times. 
  //Maybe it happened after, but who knows? Try increasing the "intervalInMiliseconds" and
  //  the "tries" values if you believe that it will actually happen.
}, intervalInMiliseconds);
```
