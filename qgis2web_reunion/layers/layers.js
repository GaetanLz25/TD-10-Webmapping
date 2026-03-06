ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5490").setExtent([7739513.016638, -15736696.769743, 8009316.246323, -15582134.882893]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_reunion_men_pauv_2 = new ol.format.GeoJSON();
var features_reunion_men_pauv_2 = format_reunion_men_pauv_2.readFeatures(json_reunion_men_pauv_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5490'});
var jsonSource_reunion_men_pauv_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_reunion_men_pauv_2.addFeatures(features_reunion_men_pauv_2);
var lyr_reunion_men_pauv_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_reunion_men_pauv_2, 
                style: style_reunion_men_pauv_2,
                popuplayertitle: 'reunion_men_pauv',
                interactive: true,
    title: 'reunion_men_pauv<br />\
    <img src="styles/legend/reunion_men_pauv_2_0.png" /> 0 - 3,6<br />\
    <img src="styles/legend/reunion_men_pauv_2_1.png" /> 3,6 - 18,9<br />\
    <img src="styles/legend/reunion_men_pauv_2_2.png" /> 18,9 - 54<br />\
    <img src="styles/legend/reunion_men_pauv_2_3.png" /> 54 - 125<br />\
    <img src="styles/legend/reunion_men_pauv_2_4.png" /> 125 - 1910<br />' });
var group_la_reunion = new ol.layer.Group({
                                layers: [lyr_reunion_men_pauv_2,],
                                fold: 'open',
                                title: 'la_reunion'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_reunion_men_pauv_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_la_reunion];
lyr_reunion_men_pauv_2.set('fieldAliases', {'Id_carr1km': 'Id_carr1km', 'Ind': 'Ind', 'Men': 'Men', 'Men_pauv': 'Men_pauv', 'Men_1ind': 'Men_1ind', 'Men_5ind': 'Men_5ind', 'Men_prop': 'Men_prop', 'Men_fmp': 'Men_fmp', 'Ind_snv': 'Ind_snv', 'Men_surf': 'Men_surf', 'Men_coll': 'Men_coll', 'Men_mais': 'Men_mais', 'Log_av45': 'Log_av45', 'Log_45_70': 'Log_45_70', 'Log_70_90': 'Log_70_90', 'Log_ap90': 'Log_ap90', 'Log_inc': 'Log_inc', 'Log_soc': 'Log_soc', 'Ind_0_3': 'Ind_0_3', 'Ind_4_5': 'Ind_4_5', 'Ind_6_10': 'Ind_6_10', 'Ind_11_17': 'Ind_11_17', 'Ind_18_24': 'Ind_18_24', 'Ind_25_39': 'Ind_25_39', 'Ind_40_54': 'Ind_40_54', 'Ind_55_64': 'Ind_55_64', 'Ind_65_79': 'Ind_65_79', 'Ind_80p': 'Ind_80p', 'Ind_inc': 'Ind_inc', 'I_pauv': 'I_pauv', 'I_est_1km': 'I_est_1km', });
lyr_reunion_men_pauv_2.set('fieldImages', {'Id_carr1km': 'TextEdit', 'Ind': 'TextEdit', 'Men': 'TextEdit', 'Men_pauv': 'TextEdit', 'Men_1ind': 'TextEdit', 'Men_5ind': 'TextEdit', 'Men_prop': 'TextEdit', 'Men_fmp': 'TextEdit', 'Ind_snv': 'TextEdit', 'Men_surf': 'TextEdit', 'Men_coll': 'TextEdit', 'Men_mais': 'TextEdit', 'Log_av45': 'TextEdit', 'Log_45_70': 'TextEdit', 'Log_70_90': 'TextEdit', 'Log_ap90': 'TextEdit', 'Log_inc': 'TextEdit', 'Log_soc': 'TextEdit', 'Ind_0_3': 'TextEdit', 'Ind_4_5': 'TextEdit', 'Ind_6_10': 'TextEdit', 'Ind_11_17': 'TextEdit', 'Ind_18_24': 'TextEdit', 'Ind_25_39': 'TextEdit', 'Ind_40_54': 'TextEdit', 'Ind_55_64': 'TextEdit', 'Ind_65_79': 'TextEdit', 'Ind_80p': 'TextEdit', 'Ind_inc': 'TextEdit', 'I_pauv': 'Range', 'I_est_1km': 'Range', });
lyr_reunion_men_pauv_2.set('fieldLabels', {'Id_carr1km': 'hidden field', 'Ind': 'inline label - always visible', 'Men': 'inline label - always visible', 'Men_pauv': 'inline label - always visible', 'Men_1ind': 'hidden field', 'Men_5ind': 'hidden field', 'Men_prop': 'hidden field', 'Men_fmp': 'hidden field', 'Ind_snv': 'hidden field', 'Men_surf': 'hidden field', 'Men_coll': 'hidden field', 'Men_mais': 'hidden field', 'Log_av45': 'hidden field', 'Log_45_70': 'hidden field', 'Log_70_90': 'hidden field', 'Log_ap90': 'hidden field', 'Log_inc': 'hidden field', 'Log_soc': 'hidden field', 'Ind_0_3': 'hidden field', 'Ind_4_5': 'hidden field', 'Ind_6_10': 'hidden field', 'Ind_11_17': 'hidden field', 'Ind_18_24': 'hidden field', 'Ind_25_39': 'hidden field', 'Ind_40_54': 'hidden field', 'Ind_55_64': 'hidden field', 'Ind_65_79': 'hidden field', 'Ind_80p': 'hidden field', 'Ind_inc': 'hidden field', 'I_pauv': 'hidden field', 'I_est_1km': 'hidden field', });
lyr_reunion_men_pauv_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});