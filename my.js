(function(){
    'use strict';
    var header = document.getElementById('header');
    var deg = 0;
    function rotateHeader() {
        deg = deg + 0.0000000000000000000000000000000000000000000000001;
        header.style.transform = 'rotateX(' + deg +  'deg)';
    }
    setInterval(rotateHeader, 1);
})();
