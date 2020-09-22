<<<<<<< HEAD
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var selector = event.makeRelativeSelector(".js-hr-progress-bar");
		if($(selector).length > 0)
		{
			$.HSCore.components.HSProgressBar.init('.js-hr-progress-bar', {
				direction: 'horizontal',
				indicatorSelector: '.js-hr-progress-bar-indicator'
			});
		}
	});


	BX.addCustomEvent("BX.Landing.Block:Node:update", function(event) {
		// dbg: test update attributes
	});

=======
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var selector = event.makeRelativeSelector(".js-hr-progress-bar");
		if($(selector).length > 0)
		{
			$.HSCore.components.HSProgressBar.init('.js-hr-progress-bar', {
				direction: 'horizontal',
				indicatorSelector: '.js-hr-progress-bar-indicator'
			});
		}
	});


	BX.addCustomEvent("BX.Landing.Block:Node:update", function(event) {
		// dbg: test update attributes
	});

>>>>>>> 6c681af9349b7a64bd83230efb3e86525f8fc49e
})();