(function() {
	
	// Mobile = 375, Normal 1024
	var breakpoint;
	
	function _init() {
		
		if (_urlParams('nojs')) {
			
			window.location.href = 'http://marvel.thecomet.be/ad-js/public/';
		}
		
		_calculateBreakpoint();
		
		window.addEventListener('resize', function() {
		
			_calculateBreakpoint();
				
		});
	}
	
	function _urlParams(name) {
		
		name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
		var regexS = "[\\?&]"+name+"=([^&#]*)";
		var regex = new RegExp( regexS );
		var results = regex.exec( window.location.href );
		if( results == null ) {
		  	
			return null;
		}
		else {
		  
	    	return results[1];
		}
	}
	
	function _calculateBreakpoint() {
		
		if (document.querySelector('html').classList.contains(breakpoint)) {
			
			document.querySelector('html').classList.remove(breakpoint);
		}
		
		if (window.innerWidth < 1024) {
			
			breakpoint = 'bp0';
			document.querySelector('.article__sidebar').innerHTML = '';
			
		}
		else {
			
			breakpoint = 'bp1';
			_getSidebar();
		}
		
		document.querySelector('html').classList.add(breakpoint);
	}
	
	function _getSidebar() {
		
		reqwest({
			url: '/ad-js/public/index.php/sidebar',
			method: 'get',
			success: function(data) {
				
				console.log(data);
				document.querySelector('.article__sidebar').innerHTML = data;
			}
		});
	}
	
	window.addEventListener('DOMContentLoaded', _init);
	
})();