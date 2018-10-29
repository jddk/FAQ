  //rem字体适配
        (function (){
            document.addEventListener('DOMContentLoaded', function () {
                var html = document.documentElement;
                var windowWidth = html.clientWidth; 
                html.style.fontSize = windowWidth /750*100 + 'px';
            }, false);//px -》rem 除以 100
        })();
        //  100px = 1rem
        //也就是 750的设计稿上量的100px 代码写 1rem