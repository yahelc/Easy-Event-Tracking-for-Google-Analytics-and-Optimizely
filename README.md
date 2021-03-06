Instead of building complex functions for DOM-event driven click tracking over and over again, this plugin makes it simple to just bind the events directly. 

It's important to note that this should not be used for actual, mission-critical events (since it does not use `click()`). It is specifically intended for click-based event tracking. While some sources recommend using `return false;` and setTimeout for doing this click tracking, it's unwise to interrupt actual user actions and hope for the best on setTimeout. Instead, using mousedown and keydown are close-enough approximations for web analytics. 

<h2>Sample</h2>

```html
<a href="/bar.html" id="foo">Click here</a>
```

For binding custom analytics events to that click, all you'd need to write is:

```javascript
$('#foo').analytics(function(){
//custom tracking code here. 
});
```
If you'd like to trigger a Google Analytics tracking event anytime someone initiates a click on `#foo`, all you'd need to write is:
```javascript
$('#foo').gaevent(['Category', 'Action', 'Label', 1]);
```

For triggering an Optimizely custom goal for all keypresses and mousedowns, all you'd need to write is:
```javascript
$('#foo').optimizely('goal_name');
```
