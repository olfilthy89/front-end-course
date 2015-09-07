window.addEventListener('load', function(){
	var bulbs = document.getElementById('lightBulb');
	
	function lightsOn () {
		bulbs.src = 'pic_bulbon.gif';	
	}
	function lightsOff () {
		bulbs.src = 'pic_bulboff.gif';
	}
	
	bulbs.addEventListener('mouseenter',lightsOn);
	bulbs.addEventListener('mouseleave',lightsOff);
});