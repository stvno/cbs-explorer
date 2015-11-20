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
        
        refreshStyle(c);
    };
});

var attributes = [
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
 {attr: 'opp_water', label: 'Water area', type: 'absolute', unit: 'ha'},
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
];
var selector = document.getElementById('themeselector');
selector.onchange = function(e) {
     c.attr = this.value;
     console.log(this.value);
        //TODO: get values from input
        
        refreshStyle(c);
};

attributes.forEach(function(d){
    var t = document.querySelector('#optionTemplate');
    var  o = t.content.querySelector('option');
    o.value = d.attr;
    o.innerHTML =d.label;
    var clone = document.importNode(t.content, true);
    selector.appendChild(clone);
}) 
//})();