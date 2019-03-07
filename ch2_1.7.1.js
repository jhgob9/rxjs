const { of } = rxjs;
const numbers$ = of([1,2,3,4,5,6,7,8]);

// next, error, complete 가 있는 객체를 받음
numbers$.subscribe({
	next(v){
		console.log(v);
	},
	error(e){
		console.log(e);
	},
	complete(){
		console.log('complete');
	}
});

// next 함수만 받음
numbers$.subscribe(v => {
	console.log(v);
})

// next, error 함수만 받음
numbers$.subscribe(v => {
	console.log(v);
},e => {
	console.log(e);
});

// next, error, complete 함수만 받음
numbers$.subscribe(v => {
	console.log(v);
},e => {
	console.log(e);
},() => {
	console.log('complete');
});