// rxjs
const { fromEvent } = rxjs;
const click$ = fromEvent(document,'click');
click$.subscribe(function(v){
	console.log(v);
});

//또는
click$.subscribe({
	next: function(v){
		console.log(v);
	}
});




// 옵서버 패턴
let newsPaper = new Subject();
newsPaper.add({
	update: function(v){
		console.log(v);
	}
});


