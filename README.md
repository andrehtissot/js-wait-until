# js-wait-until
Generic wait until something happen function

Useful to sync browser events, user interactions, and timed events when callbacks or promises are not available.
<br />
By default "waitUntil", with value -1, only stops when whatever you want to happen "happen".
If tries is set, it only will test if what you want happen "tries" times:
```
var tries = 40;
```
<br />
By default "intervalInMiliseconds" value is 50.
This defines how long it'll take between each test loop:
```
var intervalInMiliseconds = 100;
```
<br />
The test function should return true if whatever you want have "happened" or false if it must keep waiting:
```
var testFunction = function(){
  //Something, something...
};
```
<br />
Simple and functional:
```
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
