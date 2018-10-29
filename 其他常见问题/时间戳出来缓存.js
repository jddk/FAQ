var api_include,user_id,store_id;
api_include = {
	//基本初始化（只执行一次）
	_init: function () {
		var _this = this;
		_this._init_file();
	},
	//基础文件初始化
	_init_file: function () {
		var _this = this;
		var now = new Date();
		//var ord = now.getFullYear().toString() + (now.getMonth() + 1).toString() + now.getDate().toString();
		var ord = now.getTime();
		document.write('<script src="/app_mp/js/api_config.js?' + ord + '">' + '<\/script>');
		document.write('<script src="/static/js/etop/tools.js?' + ord + '">' + '<\/script>');
		document.write('<script src="/app_mp/js/load_data.js?' + ord + '">' + '<\/script>');
		//$.getScript('/app_mp/js/api_config.js?' + ord);
		//$.getScript('/static/js/etop/tools.js?' + ord);
		//$.getScript('/app_mp/js/load_data.js?' + ord);
		/*$.getScript(this.path + 'super_table.js?' + ord).done(function(){
			_this.init_table($(document));
		});*/
	},
};
//$(document).ready(function(){
	api_include._init();
//});
