function openShow (url,index) {
	var web;
	if (index) {
		web = 'html/show.html';
	}else{
		web = 'show.html';
	}
	mui.openWindow({
	 	url:web,
	 	id:'show',
	 	extras:{
	 		url:url
	 	}
	 });
}