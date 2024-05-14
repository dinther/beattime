# beattime
BeatTime is a library that implements both logic and UI for node based value animation using the BeatValue class.

Just create a BeatValue object for every value you want to animate using nodes.

```JS Theme=Dark
        var beatvalue = new BeatValue('X', 0);
        beatvalue.addNode(3,10);
        beatvalue.addNode(6,0, BeatEasings.linear);
        beatvalue.addNode(9,10,BeatEasings.easeInOutQuad);
```

You can obtain the value for 'X' at any time like this
```JS
let x = beatvalue.getValueAtTime(time);
console.log(x);
```
Below an image to illustrate things.

![image](https://github.com/dinther/beattime/assets/1192916/73c84ee1-664e-48e4-84ff-e45a86dc6e89)

Currently BeatEasings.js provides 32 different easing routines.
```
none           linear
easeInQuad     easeOutQuad     easeInOutQuad
easeInCubic    easeOutCubic    easeInOutCubic
easeInQuart    easeOutQuart    easeInOutQuart
easeInQuint    easeOutQuint    easeInOutQuint
easeInSine     easeOutSine     easeInOutSine
easeInExpo     easeOutExpo     easeInOutExpo
easeInCirc     easeOutCirc     easeInOutCirc
easeInBack     easeOutBack     easeInOutBack
easeInElastic  easeOutElastic  easeInOutElastic
easeInBounce   easeOutBounce   easeInOutBounce
```
This will be expanded later with a range of music specific easings for hip-hop, circuit House and many others.



