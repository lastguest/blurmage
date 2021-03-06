# Blurmage

<center>![](blurmage.gif)</center>

Generate lazy-loading HTML images with a blurred inline preview.

### Install

```bash
npm -g i blurmage
```

### How to use

Pass an URL or path of an image file as first argument of the cli tool `blurmage`, the resulting tag will be printed on the console.

**Example**

```bash
❯ blurmage http://caffeina.com/media/New-Office.jpg
```

The outputted tag will be :

```
<!--IMG--><div class="-blurmage" style="transform:translatez(0);background-image:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDIBCQkJDAsMGA0NGDIhHCEyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIACEAMgMBEQACEQEDEQH/xAGiAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgsQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+gEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoLEQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/AOpstPjurASANn1qLG3MamnaKZRtPFKw3InuNAeEbg4IqrC5xtvYiL5pBlRSsDkZ19daes7b5kiUe9PlJ5zHbxJo1vcBTdK3PY01Bt2RMqiirs1h4r0zaOe1dX1Koee81oLqZ+l63JB4cGxQMDqa4+tj0ulyfRPE8d5vjluPLcd6x5ZX3NOZW2OR8X+ONY068MVjKJEzgH1rp5bI5lNuTRmr4p157INdXBUuMgCuzDxg17x52MqVVK0DmootT1nVvKlnkVWP3ia5qrSlodtFN002bcngVLSJLl7/AHyBvu5pU5e8mKuv3bJtyr8u7pxX0CqKx8dKjK70LOry3q6azQTqsYPKA18zF8zPvJLlRyMetT25LJ+PvWvsraox9tfRlbU/EjXLxkQAMhzn1oGQXviq6nMZ8tQF7AUg06mvB43hNoifZFE6/wAQolqhrQ19G8SxuHE8IkLep6VNpLYq0Xua/wDbOkd7HmlzVe5HsaXY86+06leZAeRgeoFO8Ymyp1J7I0bHw9e3MfKlc+tRLERXU6IZbVlujasPAPmyAzvx6VzyxT6HdTypL4maGofDSGaDNrlXA70U8RK+o6+XQt7jOD1PwvqGkSsJ4W29mxXZGSlsePUpSg9Sraw3IlAj3ZPpV2MuY3RpupEA5eiyDnLGg1wVtz6HA/CjtNP/ANSfrXGexLob9p1SmjF9Tc/hFbHL1OP8f/8AIPP0rpo7nm4z4TzTTP8AXL9a7TxWd2n+rX6CoEf/2Q);background-size:cover;background-position:center center;transition:background-image .45s ease-in-out;width:1023px;height:670px;"><img width="1023" height="670" src="http://caffeina.com/media/New-Office.jpg" style="visibility:hidden" onload="this.parentNode.style['background-image']='url('+this.src+')'"></div><!--/IMG-->
```


### Example

<p data-height="569" data-theme-id="light" data-slug-hash="MeWwBB" data-default-tab="result" data-user="lastguest" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/lastguest/pen/MeWwBB/">Blurmage Tag Example</a> by Stefano Azzolini (<a href="http://codepen.io/lastguest">@lastguest</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
