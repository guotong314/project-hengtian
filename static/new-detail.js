window.onload = function() {
	var print = document.getElementById("print");
	var close = document.getElementById("close");
	//打印本页
	function printPage() {
		var newstr = document.getElementsByTagName('body')[0].innerHTML;//保存姚打印页面信息
		var oldstr = document.body.innerHTML;//保存当前页面内容
		document.body.innerHTML = newstr;//当前页面替换为打印的内容
		window.print();
		document.body.innerHTML = oldstr;//还原当前页面
		return false;
	}
	//关闭当前窗口
	function closewin() {
		this.window.opener = null;
		if(navigator.userAgent.indexOf("MSIE") > 0) {
			if(navigator.userAgent.indexOf("MSIE 6.0") > 0) {
				window.opener = null;
				window.close();
			} else {
				window.open('', '_top');
				window.top.close();
			}
		} else if(navigator.userAgent.indexOf("Firefox") > 0) {
			window.location.href = 'about:blank ';
		} else {
			window.opener = null;
			window.open(' ', '_self');
			window.close();
		}
	}
	print.onclick = function() {
		printPage();
	}

	
	close.onclick = function() {
		closewin();
	}
}