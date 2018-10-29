  var padDate = function(value){
            return value < 10 ? '0' + value:value;
        }
        new Vue({
            el: '#app',
            data:{
                date:new Date()
            },
            filters:{
                formatDate:function(value){
                    var date = new Date(value);
                    var year = date.getFullYear();
                    var month = padDate(date.getMonth()+1);
                    var day = padDate(date.getDate());
                    var hours = padDate(date.getHours());
                    var minutes = padDate(date.getMinutes());
                    var seconds = padDate(date.getSeconds());
                    return year + '-' + month + '-' + day + ' ' + hours + ':' + minutes
                     + ':' + seconds;
                }
            },
            mounted: function(){
                var _this = this;
                this.timer = setInterval(function(){
                    _this.date = new Date();
                },1000);
            },
            beforeDestory:function(){
                if(this.timer){
                    clearInterval(this.timer);
                }
            }
        })