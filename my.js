(function(){
    'use strict';
    var header = document.getElementById('header');
    var deg = 0;
    function rotateHeader() {
        deg = deg + 1;
        header.style.transform = 'rotateX(' + deg +  'deg)';
    }
    setInterval(rotateHeader, 1000);
})();
