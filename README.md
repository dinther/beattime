# beattime
BeatTime is a library that implements node based value animation for the BeatValue class.

Just create a BeatValue object for every value you want to animate using nodes.

```JS
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



