const observer = {
	next: x => console.log('Observer가 Observable로 부터 받은 데이터:' + x),
	error: err => console.log('Observer가 Observable로 부터 받은 에러 데이터:' + err),
	complete: () => console.log('Observer가 Observable로 부터 종료되었다는 알림을 받은 경우')
}
click$.subscribe(observer); // observer 객체를 파라미터로 받음

click$.subscribe(x => console.log('Observer가 Observable로 부터 받은 데이터:' + x));

// observer의 next, error, complete 함수를 파라미터로 받음
click$.subscribe(
	x => console.log('Observer가 Observable로 부터 받은 데이터:' + x),
	err => console.log('Observer가 Observable로 부터 받은 에러 데이터:' + err),
	() => console.log('Observer가 Observable로 부터 종료되었다는 알림을 받은 경우')
);