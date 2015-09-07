window.addEventListener('load', function(){
	
	var changeText = document.getElementById('someContent'),
		paragraph = document.getElementsByTagName('p');
		
	function changeContent() {
		changeText.innerHTML = 'Already Tested!';
	}
	
	changeText.addEventListener('click', changeContent);
});
