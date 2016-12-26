



var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

new ScrollMagic.Scene({triggerElement: "#p0"})
	.setTween("#p0 > div", {y: "80%", ease: Linear.easeNone})
	.addIndicators()
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#p1"})
	.setTween("#p1 > div", {y: "80%", ease: Linear.easeNone})
	.addIndicators()
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#p2"})
	.setTween("#p2 > div", {y: "80%", ease: Linear.easeNone})
	.addIndicators()
	.addTo(controller);

new ScrollMagic.Scene({triggerElement: "#p3"})
	.setTween("#p3 > div", {y: "80%", ease: Linear.easeNone})
	.addIndicators()
	.addTo(controller);

