(function($){
	/*
	usage: $('#foo').analytics(function(){
			//actions here
			});
	*/	
$.fn.analytics = function(callback) {
  return this.each(function() {
        $(this).one('keydown.analytics mousedown.analytics',function(e) {
        if(e.type==="mousedown" || e.which===13){
        callback.apply(this);
    }
    });
  });
};
/*
usage: $('#foo').gaevent(['cat', 'action', 'label']);
*/	

$.fn.gaevent = function(ga){
    return this.each(function() {
    $(this).analytics(function(){
	window._gaq = window._gaq || [];
	ga.splice(0,0,"_trackEvent");
	_gaq.push(ga);
	});
 });
};
/*
usage: $('#foo').optimizely('goal_name');
*/
if(typeof(optimizely)!=="undefined")
{
 $.fn.optimizely = function(goal){
    return this.each(function() {
    $(this).analytics(function(){optimizely.trackEvent(goal);});
 });
};
}
})(jQuery);
