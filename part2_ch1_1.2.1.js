const eventHander = event => {
	console.log(event.currentTarget);
};
document.addEventListener('click', eventHander);