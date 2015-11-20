'use strict';
(function(){
var piefje = document.getElementById('piefje');
var sidebar = document.getElementById('sidebar');
piefje.onclick= function(e){
    if(piefje.classList.contains('open')) {
        piefje.classList.remove('open');
        sidebar.classList.remove('open');
    }
    else {
        piefje.classList.add('open');
        sidebar.classList.add('open');
    }
}
})()