class NewsPaper{
	constructor(){
		this._observers = [];
	}
	setNews(news){
		this.notify(news);
	}
	add(observer){
		this._observers.push(observer);
	}
	remove(observer){
		let idx = this._observers.indexOf(observer);
		if(idx != -1){
			this._observers.splice(idx,1);
		}
	}
	notify(news){
		this._observers.forEach( v => {
			v.update(news);
		});
	}
}

class NewScrapper{
	update(news){
		console.log(`뉴스를 스크랩하자 = ${news}`);
	}
}

class NewReader{
	update(news){
		console.log(`뉴스를 읽자 = ${news}`);
	}
}

let newsPaper = new NewsPaper();

// 구독하기
newsPaper.add(new NewScrapper());
newsPaper.add(new NewReader());

// 상태 변경
newsPaper.setNews('에어팟2 가을 출시 예정');
newsPaper.setNews('고프로7 블랙 특별 한정판 더스크 화이트 출시');