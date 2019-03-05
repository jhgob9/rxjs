// XMLHttpRequest에 의해 입력된 데이터
let result;
const xhr = new XMLHttpRequest();
xhr.onload = function (e) {
	// Ajax를 통해 얻은 데이터를 result에 저장한다
	{
		list:[
			"게시글 1번. 안녕하세요",
			"게시글 2번. 안녕하세요",
			"게시글 3번. 안녕하세요"
		]
	}
	result = JSON.parse(xhr.responseText);
}
xhr.open('GET',url);
xhr.send();