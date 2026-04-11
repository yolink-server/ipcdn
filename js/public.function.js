var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?2825c10475cc35cf6f74543a61b755b5";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

function getIPInfo() {
	const xhr = new XMLHttpRequest();
	const url = 'https://api.ipcdn.org/api/getIp';

	xhr.open('GET', url, true);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onload = function() {
		if (xhr.status >= 200 && xhr.status < 300) {
			try {
				const response = JSON.parse(xhr.responseText);
				const ipinfoDiv = document.querySelector('.ipinfo');

				if (ipinfoDiv) {
					console.log(response);
					let output = '';
					output += `<p class="strIp"><strong>${response.data.ip}</strong></p>`;
					output += `<p><span class="strLine"><strong>timezone:</strong> ${response.data.timezone}</span><span class="strLine"><strong>Country:</strong> ${response.data.country}</span></p>`;
					output += `<p><span class="strLine"><strong>Region:</strong> ${response.data.region}</span><span class="strLine"><strong>City:</strong> ${response.data.city}</span></p>`;
					output += `<p><strong>ISP:</strong> ${response.data.isp}</p>`;
					ipinfoDiv.innerHTML = output;
				} else {
					console.error('.ipinfo 元素未找到');
				}
			} catch (error) {
				console.error('JSON解析失败:', error);
			}
		} else {
			console.error('请求失败，状态码:', xhr.status);
		}
	};

	xhr.onerror = function() {
		console.error('请求发生错误');
	};

	xhr.send();
}