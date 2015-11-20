'use strict';
//(function(){
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
};
[].forEach.call(document.querySelectorAll('#sidebar input.classselect'), function (input) {
    input['onclick' in input ? 'onclick' : 'onchange'] = function (e) {
        c.type = this.value;
        //TODO: get values from input
        if(c.type=='s') c.color = "PuOr";
        else c.color = "YlGn";
        refreshStyle(c);
    };
});
var selector = document.getElementById('themeselector');
selector.onchange = function(e) {
    c.attr = this.value;
    refreshStyle(c);
};
var numberclass = document.getElementById('numberclasses');
numberclass.onchange = function(e) {
    c.cnt = this.value; 
    refreshStyle();
}
var colors = [
{name:'YlGn',type:'seq'},
{name:'YlGnBu',type:'seq'},
{name:'GnBu',type:'seq'},
{name:'BuGn',type:'seq'},
{name:'PuBuGn',type:'seq'},
{name:'PuBu',type:'seq'},
{name:'BuPu',type:'seq'},
{name:'RdPu',type:'seq'},
{name:'PuRd',type:'seq'},
{name:'OrRd',type:'seq'},
{name:'YlOrRd',type:'seq'},
{name:'YlOrBr',type:'seq'},
{name:'Purples',type:'seq'},
{name:'Blues',type:'seq'},
{name:'Greens',type:'seq'},
{name:'Oranges',type:'seq'},
{name:'Reds',type:'seq'},
{name:'Greys',type:'seq'},
{name:'PuOr',type:'div'},
{name:'BrBG',type:'div'},
{name:'PRGn',type:'div'},
{name:'PiYG',type:'div'},
{name:'RdBu',type:'div'},
{name:'RdGy',type:'div'},
{name:'RdYlBu',type:'div'},
{name:'Spectral',type:'div'},
{name:'RdYlGn',type:'div'}
]
var colorlist = document.getElementById('colorlist');
var refreshColors = function() {
    colorlist.innerHTML = null;
    var showcolors = colors.filter(function(d){
        if (c.type=='s') return d.type == 'div';
        else return d.type=='seq';
    })
    showcolors.forEach(function(d){
        var t = document.querySelector('#colorTemplate');
        var svg = t.content.querySelector('svg');
        svg.id = d.name;
        var c0 = t.content.querySelector('.c0');
        var c1 = t.content.querySelector('.c1');
        var c2 = t.content.querySelector('.c2');
        c0.attributes.fill.value = colorbrewer[d.name][3][0];
        c1.attributes.fill.value = colorbrewer[d.name][3][1];
        c2.attributes.fill.value = colorbrewer[d.name][3][2];
        var clone = document.importNode(t.content, true);
        colorlist.appendChild(clone);
    });
};
    refreshColors();
colorlist.onclick = function(e) {
    var svg = e.target.hasAttribute('y')?e.target.parentNode:e.target.children[0];
    c.color = svg.id;
    [].forEach.call(document.querySelectorAll('#sidebar .colorbar'), function (d) {
        d.classList.remove('active')
    });
    svg.parentNode.classList.add('active');
    refreshStyle(c);
    }
var attributes = [
 {attr: 'p_00_14_jr', label: '% 0-14 year', type: 'percentage', unit :'%'},
 {attr: 'p_15_24_jr', label: '% 15-24 year', type: 'percentage', unit :'%'},
 {attr: 'p_25_44_jr', label: '% 25-44 year', type: 'percentage', unit :'%'},
 {attr: 'p_45_64_jr', label: '% 45-64 year', type: 'percentage', unit :'%'},
 {attr: 'p_65_eo_jr', label: '% 65+ year', type: 'percentage', unit :'%'},
 {attr: 'p_ant_aru', label: '% from Antilles & Aruba', type: 'percentage', unit :'%'},
 {attr: 'p_eenp_hh', label: '% Single person households', type: 'percentage', unit :'%'},
 {attr: 'p_gehuwd', label: '% Maried people', type: 'percentage', unit :'%'},
 {attr: 'p_gescheid', label: '% Divorced people', type: 'percentage', unit :'%'},
 {attr: 'p_hh_m_k', label: '% Households with kids', type: 'percentage', unit :'%'},
 {attr: 'p_hh_z_k', label: '% Households without kids', type: 'percentage', unit :'%'},
 {attr: 'p_marokko', label: '% from Marocco', type: 'percentage', unit :'%'},
 {attr: 'p_n_w_al', label: '% Non-western immigrants', type: 'percentage', unit :'%'},
 {attr: 'p_ongehuwd', label: '% Unmaried people', type: 'percentage', unit :'%'},
 {attr: 'p_over_nw', label: '% Other non-western immigrants', type: 'percentage', unit :'%'},
 {attr: 'p_surinam', label: '% from Suriname', type: 'percentage', unit :'%'},
 {attr: 'p_turkije', label: '% from Turkey', type: 'percentage', unit :'%'},
 {attr: 'p_verweduw', label: '% Widow(er)s', type: 'percentage', unit :'%'},
 {attr: 'p_west_al', label: '% Western immigrants', type: 'percentage', unit :'%'},
 {attr: 'a_bst_b', label: '# Petrol cars', type: 'absolute', unit: 'cars'},
 {attr: 'a_bst_nb', label: '# Non-petrol cars', type: 'absolute', unit: 'cars'},
 {attr: 'a_lftj6j', label: '# Cars < 6 years', type: 'absolute', unit: 'cars'},
 {attr: 'a_lfto6j', label: '# Cars 6+ years', type: 'absolute', unit: 'cars'},
 {attr: 'aant_inw', label: '# Inhabitants', type: 'absolute', unit: 'persons'},
 {attr: 'aant_man', label: '# Males', type: 'absolute', unit: 'males'},
 {attr: 'aant_vrouw', label: '# Females', type: 'absolute', unit: 'females'},
 {attr: 'aantal_hh', label: '# Households', type: 'absolute', unit: 'households'},
 {attr: 'auto_hh', label: 'Cars/household', type: 'relative', unit: 'car/hh'},
 {attr: 'auto_land', label: 'Car density', type: 'density', unit: 'car/km²'},
 {attr: 'auto_tot', label: '# Cars', type: 'absolute', unit: 'cars'},
 {attr: 'bedr_auto', label: '# Company cars', type: 'absolute', unit: 'cars'},
 {attr: 'bev_dichth', label: 'Population density', type: 'density', unit: 'persons/km²'},
 {attr: 'gem_hh_gr', label: 'Average household size', type: 'relative', unit: 'persons'},
 {attr: 'motor_2w', label: '# Motorbikes', type: 'absolute', unit: 'bikes'},
 {attr: 'opp_land', label: 'Land area', type: 'absolute', unit: 'ha'},
 {attr: 'opp_tot', label: 'Total area', type: 'absolute', unit: 'ha'},
 {attr: 'opp_water', label: 'Water area', type: 'absolute', unit: 'ha'}
];

attributes.forEach(function(d){
    var t = document.querySelector('#optionTemplate');
    var  o = t.content.querySelector('option');
    o.value = d.attr;
    o.innerHTML =d.label;
    var clone = document.importNode(t.content, true);
    selector.appendChild(clone);
}) 

var createLegend = function() {
    var elLegend = document.querySelector('#legenda');
    var attr = attributes.filter(function(d){return d.attr == c.attr});    
    elLegend.innerHTML = '<h3>'+attr[0].label+'</h3>';
    
     var t = document.querySelector('#legendTemplate');
        t.content.querySelector('.legendcolor').style.background = colorbrewer[c.color][c.cnt][0];
        t.content.querySelector('.legendvalue').innerHTML =null;
        t.content.querySelector('.legendunit').innerHTML =null;
        var clone = document.importNode(t.content, true);
        elLegend.appendChild(clone);
    for(var i=1; i<c.steps.length+1; i++) {
        var t = document.querySelector('#legendTemplate');
        t.content.querySelector('.legendcolor').style.background = colorbrewer[c.color][c.cnt][i];
        t.content.querySelector('.legendvalue').innerHTML =Math.round(c.steps[i-1]*100)/100;
        t.content.querySelector('.legendunit').innerHTML =attr[0].unit;
        
        var clone = document.importNode(t.content, true);
        elLegend.appendChild(clone);
    }
   
}
var opacityslider = document.getElementById('opacityslider');
opacityslider.onchange = function(e) {
    mvtSource.setOpacity(this.value)
}
var mettext = document.getElementById('mettext');
mettext.onclick = function(e) {
     [].forEach.call(document.querySelectorAll('#sidebar .text'), function (d) {
        d.classList.contains('hidden')?d.classList.remove('hidden'):d.classList.add('hidden');
    });
}
var labelbox = document.getElementById('labels');
labelbox.onclick = function(e) {
    this.checked?topLayer.setOpacity(1):topLayer.setOpacity(0);
}
//})();