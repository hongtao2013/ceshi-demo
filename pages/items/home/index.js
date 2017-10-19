Page({
	data: {
		items: [
			{
				name: "视图容器",
				show: true,
				subItems: [
					{
						name: 'view',
						url: '/view/index'
					},
					{
						name: 'scroll-view',
						url: '/view/scroll'
					},
					{
						name: 'movable-view',
						url: '/view/movable'
					},
					{
						name: 'cover-view',
						url: '/view/cover'
					}
				]
			},
			// {
			// 	name: "基础内容",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'icon',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'text',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'rich-text',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'progress',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "表单组件",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'button',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'checkbox',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'form',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'input',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'label',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'picker',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'picker-view',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'radio',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'slider',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'switch',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'textarea',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "导航",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'navigator',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "媒体组件",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'audio',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'image',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'video',
			// 			url: ''
			// 		},
			// 		{
			// 			name: 'camera',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "地图",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'map',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "画布",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'canvas',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "开放数据",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'open-data',
			// 			url: ''
			// 		}
			// 	]
			// },
			// {
			// 	name: "客服回话",
			// 	show: false,
			// 	subItems: [
			// 		{
			// 			name: 'contact-button',
			// 			url: ''
			// 		}
			// 	]
			// }
		]
	},
	subShow: function(e){
		var dataset = e.currentTarget.dataset;
		var data_id = parseInt(dataset.index);
		var data_show = dataset.show;
		var set_item = "items["+data_id+"].show";
		this.data.items[data_id].show = !this.data.items[data_id].show
		// console.log(this.+set_item)
		// this.setData({
		// 	set_item: !data_show
		// })
		// console.log(this.data.items[0])
		this.setData({
			[set_item]: this.data.items[data_id].show
		})
	},
	subLink: function(e){
		var url = e.currentTarget.dataset.url;
		wx.redirectTo({
			url: ".."+url
		})
	}
})