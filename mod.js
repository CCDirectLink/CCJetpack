document.body.addEventListener('modsLoaded', function () {
	ig.input.bind(17, "jump");
	simplify.registerUpdate(function(){
		if(ig.input.state("jump"))
			simplify.jumpHigh();
	});
});