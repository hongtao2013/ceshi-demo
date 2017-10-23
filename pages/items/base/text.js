var initData = "测试第一行。\n第二行.\n第三行。";
var exLine = [];
Page({
	data: {
		text: initData
	},
	add: function(){
		exLine.push('加一行');
		this.setData({
			text: initData +'\n'+exLine.join('\n')
		})
	},
	remove: function(){
		if (exLine.length > 0) {
			exLine.pop();
			this.setData({
				text: initData +'\n'+ exLine.join('\n')
			})
		}
		
	}
})
