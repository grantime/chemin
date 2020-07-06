var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
maxResolution:28004.466152261964,

            minResolution:1.1008555644454177,

            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_avi_filaire_voies_2 = new ol.format.GeoJSON();
var features_avi_filaire_voies_2 = format_avi_filaire_voies_2.readFeatures(json_avi_filaire_voies_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_avi_filaire_voies_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_avi_filaire_voies_2.addFeatures(features_avi_filaire_voies_2);
var lyr_avi_filaire_voies_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_avi_filaire_voies_2, 
                style: style_avi_filaire_voies_2,
                interactive: false,
                title: '<img src="styles/legend/avi_filaire_voies_2.png" /> avi_filaire_voies'
            });
var format_chemin_3 = new ol.format.GeoJSON();
var features_chemin_3 = format_chemin_3.readFeatures(json_chemin_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_chemin_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_chemin_3.addFeatures(features_chemin_3);
var lyr_chemin_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_chemin_3, 
                style: style_chemin_3,
                interactive: false,
                title: '<img src="styles/legend/chemin_3.png" /> chemin'
            });
var format_cheminsruraux_4 = new ol.format.GeoJSON();
var features_cheminsruraux_4 = format_cheminsruraux_4.readFeatures(json_cheminsruraux_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cheminsruraux_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cheminsruraux_4.addFeatures(features_cheminsruraux_4);
var lyr_cheminsruraux_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cheminsruraux_4, 
                style: style_cheminsruraux_4,
                interactive: true,
                title: '<img src="styles/legend/cheminsruraux_4.png" /> chemins ruraux'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_avi_filaire_voies_2.setVisible(true);lyr_chemin_3.setVisible(true);lyr_cheminsruraux_4.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_avi_filaire_voies_2,lyr_chemin_3,lyr_cheminsruraux_4];
lyr_avi_filaire_voies_2.set('fieldAliases', {'id': 'id', 'id_nom_voie_rud': 'id_nom_voie_rud', 'calque': 'calque', 'recherche': 'recherche', 'adresse_postale': 'adresse_postale', 'tenant': 'tenant', 'aboutissant': 'aboutissant', 'observations': 'observations', 'controle': 'controle', 'nature': 'nature', 'id_dossier': 'id_dossier', 'meta_datcreat': 'meta_datcreat', 'meta_datmaj': 'meta_datmaj', 'meta_datsupp': 'meta_datsupp', 'meta_insee': 'meta_insee', 'meta_sirene': 'meta_sirene', 'meta_source': 'meta_source', 'meta_resolution': 'meta_resolution', 'meta_actif': 'meta_actif', });
lyr_chemin_3.set('fieldAliases', {'id': 'id', 'prec_plani': 'prec_plani', 'prec_alti': 'prec_alti', 'nature': 'nature', 'numero': 'numero', 'nom_voie_g': 'nom_voie_g', 'nom_voie_d': 'nom_voie_d', 'importance': 'importance', 'cl_admin': 'cl_admin', 'gestion': 'gestion', 'mise_serv': 'mise_serv', 'it_vert': 'it_vert', 'it_europ': 'it_europ', 'fictif': 'fictif', 'franchisst': 'franchisst', 'largeur': 'largeur', 'nom_iti': 'nom_iti', 'nb_voies': 'nb_voies', 'pos_sol': 'pos_sol', 'sens': 'sens', 'alias_g': 'alias_g', 'alias_d': 'alias_d', 'inseecom_g': 'inseecom_g', 'inseecom_d': 'inseecom_d', 'codevoie_g': 'codevoie_g', 'codevoie_d': 'codevoie_d', 'codepost_g': 'codepost_g', 'codepost_d': 'codepost_d', 'typ_adres': 'typ_adres', 'bornedeb_g': 'bornedeb_g', 'bornedeb_d': 'bornedeb_d', 'bornefin_g': 'bornefin_g', 'bornefin_d': 'bornefin_d', 'etat': 'etat', 'z_ini': 'z_ini', 'z_fin': 'z_fin', });
lyr_cheminsruraux_4.set('fieldAliases', {'id': 'id', 'id_nom_voi': 'id_nom_voi', 'calque': 'calque', 'recherche': 'recherche', 'adresse_po': 'adresse_po', 'tenant': 'tenant', 'aboutissan': 'aboutissan', 'observatio': 'observatio', 'controle': 'controle', 'nature': 'nature', 'id_dossier': 'id_dossier', 'meta_datcr': 'meta_datcr', 'meta_datma': 'meta_datma', 'meta_datsu': 'meta_datsu', 'meta_insee': 'meta_insee', 'meta_siren': 'meta_siren', 'meta_sourc': 'meta_sourc', 'meta_resol': 'meta_resol', 'meta_actif': 'meta_actif', });
lyr_avi_filaire_voies_2.set('fieldImages', {'id': 'TextEdit', 'id_nom_voie_rud': 'TextEdit', 'calque': 'TextEdit', 'recherche': 'TextEdit', 'adresse_postale': 'TextEdit', 'tenant': 'TextEdit', 'aboutissant': 'TextEdit', 'observations': 'TextEdit', 'controle': 'TextEdit', 'nature': 'TextEdit', 'id_dossier': 'TextEdit', 'meta_datcreat': 'DateTime', 'meta_datmaj': 'DateTime', 'meta_datsupp': 'DateTime', 'meta_insee': 'TextEdit', 'meta_sirene': 'TextEdit', 'meta_source': 'TextEdit', 'meta_resolution': 'TextEdit', 'meta_actif': 'CheckBox', });
lyr_chemin_3.set('fieldImages', {'id': 'TextEdit', 'prec_plani': 'TextEdit', 'prec_alti': 'TextEdit', 'nature': 'TextEdit', 'numero': 'TextEdit', 'nom_voie_g': 'TextEdit', 'nom_voie_d': 'TextEdit', 'importance': 'TextEdit', 'cl_admin': 'TextEdit', 'gestion': 'TextEdit', 'mise_serv': 'TextEdit', 'it_vert': 'TextEdit', 'it_europ': 'TextEdit', 'fictif': 'TextEdit', 'franchisst': 'TextEdit', 'largeur': 'TextEdit', 'nom_iti': 'TextEdit', 'nb_voies': 'TextEdit', 'pos_sol': 'TextEdit', 'sens': 'TextEdit', 'alias_g': 'TextEdit', 'alias_d': 'TextEdit', 'inseecom_g': 'TextEdit', 'inseecom_d': 'TextEdit', 'codevoie_g': 'TextEdit', 'codevoie_d': 'TextEdit', 'codepost_g': 'TextEdit', 'codepost_d': 'TextEdit', 'typ_adres': 'TextEdit', 'bornedeb_g': 'TextEdit', 'bornedeb_d': 'TextEdit', 'bornefin_g': 'TextEdit', 'bornefin_d': 'TextEdit', 'etat': 'TextEdit', 'z_ini': 'TextEdit', 'z_fin': 'TextEdit', });
lyr_cheminsruraux_4.set('fieldImages', {'id': 'TextEdit', 'id_nom_voi': 'TextEdit', 'calque': 'TextEdit', 'recherche': 'TextEdit', 'adresse_po': 'TextEdit', 'tenant': 'TextEdit', 'aboutissan': 'TextEdit', 'observatio': 'TextEdit', 'controle': 'TextEdit', 'nature': 'TextEdit', 'id_dossier': 'TextEdit', 'meta_datcr': 'TextEdit', 'meta_datma': 'TextEdit', 'meta_datsu': 'TextEdit', 'meta_insee': 'TextEdit', 'meta_siren': 'TextEdit', 'meta_sourc': 'TextEdit', 'meta_resol': 'TextEdit', 'meta_actif': 'Range', });
lyr_avi_filaire_voies_2.set('fieldLabels', {'id': 'no label', 'id_nom_voie_rud': 'no label', 'calque': 'no label', 'recherche': 'no label', 'adresse_postale': 'no label', 'tenant': 'no label', 'aboutissant': 'no label', 'observations': 'no label', 'controle': 'no label', 'nature': 'no label', 'id_dossier': 'no label', 'meta_datcreat': 'no label', 'meta_datmaj': 'no label', 'meta_datsupp': 'no label', 'meta_insee': 'no label', 'meta_sirene': 'no label', 'meta_source': 'no label', 'meta_resolution': 'no label', 'meta_actif': 'no label', });
lyr_chemin_3.set('fieldLabels', {'id': 'no label', 'prec_plani': 'no label', 'prec_alti': 'no label', 'nature': 'no label', 'numero': 'no label', 'nom_voie_g': 'no label', 'nom_voie_d': 'no label', 'importance': 'no label', 'cl_admin': 'no label', 'gestion': 'no label', 'mise_serv': 'no label', 'it_vert': 'no label', 'it_europ': 'no label', 'fictif': 'no label', 'franchisst': 'no label', 'largeur': 'no label', 'nom_iti': 'no label', 'nb_voies': 'no label', 'pos_sol': 'no label', 'sens': 'no label', 'alias_g': 'no label', 'alias_d': 'no label', 'inseecom_g': 'no label', 'inseecom_d': 'no label', 'codevoie_g': 'no label', 'codevoie_d': 'no label', 'codepost_g': 'no label', 'codepost_d': 'no label', 'typ_adres': 'no label', 'bornedeb_g': 'no label', 'bornedeb_d': 'no label', 'bornefin_g': 'no label', 'bornefin_d': 'no label', 'etat': 'no label', 'z_ini': 'no label', 'z_fin': 'no label', });
lyr_cheminsruraux_4.set('fieldLabels', {'id': 'no label', 'id_nom_voi': 'no label', 'calque': 'no label', 'recherche': 'no label', 'adresse_po': 'header label', 'tenant': 'no label', 'aboutissan': 'no label', 'observatio': 'no label', 'controle': 'no label', 'nature': 'no label', 'id_dossier': 'no label', 'meta_datcr': 'no label', 'meta_datma': 'no label', 'meta_datsu': 'no label', 'meta_insee': 'no label', 'meta_siren': 'no label', 'meta_sourc': 'no label', 'meta_resol': 'no label', 'meta_actif': 'no label', });
lyr_cheminsruraux_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});