# js-wait-until
Generic wait until something happen function

Useful to sync browser events, user interactions, and timed events when callbacks or promises are not available.

```
var tries = 40; //By default "waitUntil" only stops when whatever you want to happen "happen".
                //If tries is set, it only will test if what you want happen "tries" times.
var intervalInMiliseconds = 100; //By default this value is 50.
                               //This defines how long it'll take between each test loop.
waitUntil(function(){
  //Something, something
  // return true if whatever you want have "happened"
  // return false if it must continue to wait
}, trie, intervalInMiliseconds)
.then(function(){
  //What you wanted to happen happened!
  //Congratulations!
}, function(){
  //What you wanted to happen never happened before tested if that "tries" times. 
  //Maybe it happened after, but who knows? Try increasing the "intervalInMiliseconds" and
  //  the "tries" values if you believe that it will actually happen.
});
```
