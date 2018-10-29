  (function() {
         var html = document.documentElement;
         var width = html.getBoundingClientRect().width;
         html.style.fontSize = width / 20 + 'px';
        // 750/20=37.5 1rem=37.5px
     })();