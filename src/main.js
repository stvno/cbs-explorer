"use strict";
(function(){
/*general map related code*/
let map = L.map('map',{maxZoom:16,minZoom:7}).setView([52.342, 4.91], 14);       
let toner = new L.StamenTileLayer("toner");
map.addLayer(toner);
let hash = L.hash(map);

/* MVT related code*/
let style = function(f) {
    let style = {};
    if(tsvIsLoaded) {
        style.color = colorMe(f.properties.id);
        style.outline = {
            color:  'rgba(0,0,0,0.5)',
            size: linewidth
        };  
    }
    else {
        style.color = 'rgba(197,27,138,0.2)';
        style.outline = {
                color: 'rgb(122,1,119)',
                size: linewidth
        };    
    }    
    return style;
}
let mvtSource = new L.TileLayer.MVTSource({
  url: "https://{s}.tiles.mapbox.com/v4/wherecampeu.33aym4j6/{z}/{x}/{y}.vector.pbf?access_token=pk.eyJ1Ijoid2hlcmVjYW1wZXUiLCJhIjoieHE4bVNuRSJ9.qFTj9L2TMzVXX8G2QwJl_g",
  style: style,  
  getIDForLayerFeature: function(feature) {
    return feature.properties.id;
  },
  mutexToggle: false,
  onClick:function(e){
      if(e.feature!==null) {
          let popup = L.popup()
            .setLatLng(e.latlng)
            .setContent(createPopup(e.feature.properties.id))
            .addTo(map);
      }
  }
})
map.addLayer(mvtSource);

let createPopup = function(id) {
    return 'TODO';
}
/* classification related code*/
let linewidth = 16/16;
map.on('zoomend',function(){linewidth=map.getZoom()/16})
let buurtById = d3.map();
let tsvIsLoaded = false;

let colorMe = function(f) {
    return 'blue';
}

/*TSV related code*/
d3.tsv('data/cbsbuurt.tsv',function(d) {
    d.forEach(function(f){
        var buurt = {};
        buurt.a_bst_b = parseInt(f.a_bst_b)<0?null:parseInt(f.a_bst_b);
        buurt.a_bst_nb = parseInt(f.a_bst_nb)<0?null:parseInt(f.a_bst_nb);
        buurt.a_lftj6j = parseInt(f.a_lftj6j)<0?null:parseInt(f.a_lftj6j);
        buurt.a_lfto6j = parseInt(f.a_lfto6j)<0?null:parseInt(f.a_lfto6j);
        buurt.aant_inw =parseInt(f.aant_inw)<0?null:parseInt(f.aant_inw);
        buurt.aant_man =parseInt(f.aant_man)<0?null:parseInt(f.aant_man);
        buurt.aant_vrouw =parseInt(f.aant_vrouw)<0?null:parseInt(f.aant_vrouw);
        buurt.aantal_hh =parseInt(f.aantal_hh)<0?null:parseInt(f.aantal_hh);
        buurt.auto_hh =parseFloat(f.auto_hh)<0?null:parseFloat(f.auto_hh);
        buurt.auto_land =parseInt(f.auto_land)<0?null:parseInt(f.auto_land);
        buurt.auto_tot =parseInt(f.auto_tot)<0?null:parseInt(f.auto_tot);
        buurt.bedr_auto =parseInt(f.bedr_auto)<0?null:parseInt(f.bedr_auto);
        buurt.bev_dichth =parseInt(f.bev_dichth)<0?null:parseInt(f.bev_dichth);
        buurt.bu_code =f.bu_code;
        buurt.bu_naam =f.bu_naam;
        buurt.gem_hh_gr =parseFloat(f.gem_hh_gr)<0?null:parseFloat(f.gem_hh_gr);
        buurt.gm_code =f.gm_code;
        buurt.gm_naam =f.gm_naam;
        buurt.id =parseInt(f.id)<0?null:parseInt(f.id);
        buurt.motor_2w =parseInt(f.motor_2w)<0?null:parseInt(f.motor_2w);
        buurt.opp_land =parseInt(f.opp_land)<0?null:parseInt(f.opp_land);
        buurt.opp_tot =parseInt(f.opp_tot)<0?null:parseInt(f.opp_tot);
        buurt.opp_water =parseInt(f.opp_water)<0?null:parseInt(f.opp_water);
        buurt.p_00_14_jr =parseInt(f.p_00_14_jr)<0?null:parseInt(f.p_00_14_jr);
        buurt.p_15_24_jr =parseInt(f.p_15_24_jr)<0?null:parseInt(f.p_15_24_jr);
        buurt.p_25_44_jr =parseInt(f.p_25_44_jr)<0?null:parseInt(f.p_25_44_jr);
        buurt.p_45_64_jr =parseInt(f.p_45_64_jr)<0?null:parseInt(f.p_45_64_jr);
        buurt.p_65_eo_jr =parseInt(f.p_65_eo_jr)<0?null:parseInt(f.p_65_eo_jr);
        buurt.p_ant_aru =parseInt(f.p_ant_aru)<0?null:parseInt(f.p_ant_aru);
        buurt.p_eenp_hh =parseInt(f.p_eenp_hh)<0?null:parseInt(f.p_eenp_hh);
        buurt.p_gehuwd =parseInt(f.p_gehuwd)<0?null:parseInt(f.p_gehuwd);
        buurt.p_gescheid =parseInt(f.p_gescheid)<0?null:parseInt(f.p_gescheid);
        buurt.p_hh_m_k =parseInt(f.p_hh_m_k)<0?null:parseInt(f.p_hh_m_k);
        buurt.p_hh_z_k =parseInt(f.p_hh_z_k)<0?null:parseInt(f.p_hh_z_k);
        buurt.p_marokko =parseInt(f.p_marokko)<0?null:parseInt(f.p_marokko);
        buurt.p_n_w_al =parseInt(f.p_n_w_al)<0?null:parseInt(f.p_n_w_al);
        buurt.p_ongehuwd =parseInt(f.p_ongehuwd)<0?null:parseInt(f.p_ongehuwd);
        buurt.p_over_nw =parseInt(f.p_over_nw)<0?null:parseInt(f.p_over_nw);
        buurt.p_surinam =parseInt(f.p_surinam)<0?null:parseInt(f.p_surinam);
        buurt.p_turkije =parseInt(f.p_turkije)<0?null:parseInt(f.p_turkije);
        buurt.p_verweduw =parseInt(f.p_verweduw)<0?null:parseInt(f.p_verweduw);
        buurt.p_west_al =parseInt(f.p_west_al)<0?null:parseInt(f.p_west_al);
        buurt.water =f.water;
        buurt.wk_code =f.wk_code;
        buurtById.set(parseInt(f.id), buurt)
    });
    tsvLoaded();
});
//TSV is loaded, stop the tsv-spinner
let tsvLoaded = function() {
    document.getElementById('spinnerdiv').style.display='none';
    document.getElementById('spinner').classList.remove('cssload-whirlpool');
    tsvIsLoaded = true;
};
})();