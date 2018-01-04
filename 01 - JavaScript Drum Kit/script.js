

function playSound(e){
	const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
	var ourDivElement = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	
	if(audio === null)
	{
		return;
	}
	
	ourDivElement.classList.add("playing");
	audio.currentTime = 0;
	audio.play();
}

// This works for me but might not be the best implementation
window.addEventListener('keyup', function(e){
	var ourDivElement = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
	if(!ourDivElement)
	{
		return;
	}

	ourDivElement.classList.remove("playing");
});

window.addEventListener('keydown', playSound);

//Using transition end to rest .key css



// function removePlaying(e){
// 	console.log(e.propertyName);
// 	if(e.propertyName != "transform") {
// 		return;
// 	}
// 	console.log('shit ahppend')
// 	//this.classList.remove("playing");
// }

// var keys = document.getElementsByClassName('key');
// console.log(keys);
// for(var i =0; i < keys.length; i++){
// 	keys[i].addEventListener('transitionend', removePlaying);
// 	console.log('soemthigd ')
// }
