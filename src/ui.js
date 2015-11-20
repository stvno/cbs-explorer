'use strict';
(function(){
let piefje = document.getElementById('piefje');
let sidebar = document.getElementById('sidebar');
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