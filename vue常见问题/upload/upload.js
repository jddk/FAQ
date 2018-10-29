Vue.component('upload', {
	props: ['imgData', 'maxlen'],
	template: '<div class="upload">'+
					'<div v-for="(img, index) in imgData" class="upload-item" :key="img">'+
		    			'<img :src="img" />'+
		    			'<span @click="handleDel(index)" class="mui-badge mui-badge-danger">x</span>'+
		    		'</div>'+
		    		'<div @click="handleAdd" v-show="imgData.length < maxlen" class="upload-item">'+
		    			'<img src="../../imgs/pic_add.png" />'+
		    		'</div>'+
		    	'</div>',
	methods: {
		handleAdd: function () { // 添加图片按钮点击事件
			this.$emit('add');
		},
		handleDel: function (idx) { // 删除图片
			this.$emit('del', idx)
		}
	}
})