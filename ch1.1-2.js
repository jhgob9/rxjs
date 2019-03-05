Array.from(document.querySelectorAll('li').forEach((v,i) => {
	// Ajex의 결과인 result 변수를 이용하여 DOM에 정보를 표현
	v.innerText = result.list[i]
}));