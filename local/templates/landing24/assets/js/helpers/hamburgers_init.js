<<<<<<< HEAD
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var relativeSelector = event.makeRelativeSelector(".hamburger");
		if($(relativeSelector).length > 0)
		{
			$.HSCore.helpers.HSHamburgers.init(relativeSelector);
		}
	});

=======
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var relativeSelector = event.makeRelativeSelector(".hamburger");
		if($(relativeSelector).length > 0)
		{
			$.HSCore.helpers.HSHamburgers.init(relativeSelector);
		}
	});

>>>>>>> 6c681af9349b7a64bd83230efb3e86525f8fc49e
})();