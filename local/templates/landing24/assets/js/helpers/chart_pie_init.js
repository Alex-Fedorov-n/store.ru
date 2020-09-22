<<<<<<< HEAD
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var selector = event.makeRelativeSelector(".js-pie");
		if($(selector).length > 0)
		{
			$.HSCore.components.HSChartPie.init('.js-pie');
		}
	});


	BX.addCustomEvent("BX.Landing.Block:Node:update", function(event) {
		// var selector = event.makeRelativeSelector(".cbp");
		//
		// if($(selector).length > 0)
		// {
		// 	$.HSCore.components.HSCubeportfolio.init('.cbp');
		// }
	});

=======
;(function() {
	"use strict";

	BX.addCustomEvent("BX.Landing.Block:init", function(event) {
		var selector = event.makeRelativeSelector(".js-pie");
		if($(selector).length > 0)
		{
			$.HSCore.components.HSChartPie.init('.js-pie');
		}
	});


	BX.addCustomEvent("BX.Landing.Block:Node:update", function(event) {
		// var selector = event.makeRelativeSelector(".cbp");
		//
		// if($(selector).length > 0)
		// {
		// 	$.HSCore.components.HSCubeportfolio.init('.cbp');
		// }
	});

>>>>>>> 6c681af9349b7a64bd83230efb3e86525f8fc49e
})();