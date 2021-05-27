ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:32719").setExtent([779276.673949, 8060632.746103, 833984.025685, 8088867.023206]);
var wms_layers = [];


        var lyr_Stamen_0 = new ol.layer.Tile({
            'title': 'Stamen',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.stamen.com/toner/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'GoogleSatellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_2 = new ol.layer.Tile({
            'title': 'GoogleMaps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_Lmites_Distritales_3 = new ol.format.GeoJSON();
var features_Lmites_Distritales_3 = format_Lmites_Distritales_3.readFeatures(json_Lmites_Distritales_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Lmites_Distritales_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmites_Distritales_3.addFeatures(features_Lmites_Distritales_3);
var lyr_Lmites_Distritales_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lmites_Distritales_3, 
                style: style_Lmites_Distritales_3,
                interactive: true,
                title: '<img src="styles/legend/Lmites_Distritales_3.png" /> Límites_Distritales'
            });
var format_OTB_Cercado_2015_4 = new ol.format.GeoJSON();
var features_OTB_Cercado_2015_4 = format_OTB_Cercado_2015_4.readFeatures(json_OTB_Cercado_2015_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_OTB_Cercado_2015_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OTB_Cercado_2015_4.addFeatures(features_OTB_Cercado_2015_4);
var lyr_OTB_Cercado_2015_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OTB_Cercado_2015_4, 
                style: style_OTB_Cercado_2015_4,
                interactive: true,
    title: 'OTB_Cercado_2015<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_0.png" /> 1 DE MAYO TAMBORADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_1.png" /> 1° DE MAYO POPULAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_2.png" /> 10 DE DICIEMBRE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_3.png" /> 10 DE FEBRERO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_4.png" /> 12 DE OCTUBRE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_5.png" /> 16 DE JULIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_6.png" /> 18 DE MAYO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_7.png" /> 2° GRUPO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_8.png" /> 21 DE DICIEMBRE MOLLE MOLLE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_9.png" /> 24 DE JUNIO SAN ISIDRO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_10.png" /> 27 MAYO POLICIAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_11.png" /> 6 DE AGOSTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_12.png" /> ADELA JORDAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_13.png" /> ADELA ZAMUDIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_14.png" /> AERONAUTICA FAB<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_15.png" /> ALALAY A. MIRADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_16.png" /> ALBA RANCHO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_17.png" /> ALEJO CALATAYUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_18.png" /> ALTO ARANJUEZ SANTISIMA TRINIDAD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_19.png" /> ALTO BELLA VISTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_20.png" /> ALTO COCHABAMBA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_21.png" /> ALTO DE LA ALIANZA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_22.png" /> ALTO MIRADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_23.png" /> ALTO QUERU QUERU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_24.png" /> ALTO SALVADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_25.png" /> ALTO SALVADOR TICTI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_26.png" /> ALTO SAN ISIDRO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_27.png" /> ALTO SEBASTIAN PAGADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_28.png" /> ALTO V. HERMOSO 5 DE OCTUBRE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_29.png" /> AMAZONAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_30.png" /> AMIG<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_31.png" /> ANEXO COLON<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_32.png" /> ARANJUEZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_33.png" /> Arocagua Chilijchi<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_34.png" /> ARRUMANI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_35.png" /> ASUNCION LLALLAGUA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_36.png" /> AZIRU MARCA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_37.png" /> B. INDUSTRIAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_38.png" /> B. JARDIN TAQUIÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_39.png" /> B. MAGISTERIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_40.png" /> B. MAGISTERIO 6 DE JUNIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_41.png" /> B. MILITAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_42.png" /> B. MINERO HUANUNI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_43.png" /> B. MUNICIPAL SARCO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_44.png" /> B. POLICIAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_45.png" /> BAJO ARANJUEZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_46.png" /> BARBA DE PADILLA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_47.png" /> BARRIO COLQUIRI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_48.png" /> Barrio del ejercito<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_49.png" /> BARRIO ECOLOGICO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_50.png" /> BARRIO EL JARDIN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_51.png" /> BARRIO EL MOLINO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_52.png" /> BARRIO FABRIL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_53.png" /> BARRIO LIBERTADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_54.png" /> BARRIO LINDO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_55.png" /> BARRIO MINERO ALALAY<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_56.png" /> BARRIO OBRERO Y ANEXO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_57.png" /> BARRIO PETROLERO V. FELICIDAD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_58.png" /> BARRIO PRIMAVERA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_59.png" /> BARRIO UNIVERSITARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_60.png" /> BARRIOS UNIDOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_61.png" /> BARTOLOME GUZMAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_62.png" /> BASE AEREA ZONA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_63.png" /> BEATO SALOMON<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_64.png" /> BELLA VISTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_65.png" /> BOLIVAR ENCAÑADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_66.png" /> BOLIVAR TAMBORADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_67.png" /> CAICO ALTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_68.png" /> CAICO CENTRO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_69.png" /> CALAMPAMPA MAYORAZGO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_70.png" /> CALLE CLAURE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_71.png" /> CAMPO FERIAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_72.png" /> CANATA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_73.png" /> CANDELARIA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_74.png" /> CANTARRANA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_75.png" /> CAÑADON K´ASA HUASA AGRARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_76.png" /> CARLOS III<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_77.png" /> CARMELA CERRUTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_78.png" /> CAROLINA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_79.png" /> Casco Viejo<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_80.png" /> CENTRAL ITOCTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_81.png" /> CERRO VERDE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_82.png" /> CH´AQUIIMAYU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_83.png" /> CHALANCALLE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_84.png" /> CHAVEZ RANCHO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_85.png" /> CHIMBA CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_86.png" /> CHIMBA GRANDE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_87.png" /> CHIQUICOLLO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_88.png" /> CHIQUICOLLO LINDE ALTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_89.png" /> CIUDAD DEL NIÑO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_90.png" /> COBIJA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_91.png" /> CODEVER<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_92.png" /> CONDEBAMBA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_93.png" /> DOMINGO SAVIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_94.png" /> DORA HALKIER<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_95.png" /> EDUARDO PLAZA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_96.png" /> EL CARMEN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_97.png" /> EL FRUTILLAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_98.png" /> EL PROFESIONAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_99.png" /> EL SALVADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_100.png" /> ENCAÑADA INTEGRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_101.png" /> ENDE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_102.png" /> ENTRE RIOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_103.png" /> ERNESTO PEREIRA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_104.png" /> ESTACION CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_105.png" /> EUCALIPTOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_106.png" /> EUCALIPTOS NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_107.png" /> EUCALIPTOS SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_108.png" /> EXCOMBATIENTES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_109.png" /> FARO DE ARANJUEZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_110.png" /> FERROCAJA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_111.png" /> FERROVIARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_112.png" /> FERROVIARIO TAMBORADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_113.png" /> FUERZA AEREA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_114.png" /> GERONIMO DE OSORIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_115.png" /> GRAL ROMAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_116.png" /> GRAN CHACO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_117.png" /> GUILLERMO KILLMAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_118.png" /> HALLEIN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_119.png" /> HIGUERANI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_120.png" /> HIPODROMO SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_121.png" /> HIROSHIMA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_122.png" /> HUANUNI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_123.png" /> HUAYRA K\'ASA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_124.png" /> ILLIMANI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_125.png" /> INDEPENDENCIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_126.png" /> INTEGRACION<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_127.png" /> IRLANDES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_128.png" /> ITOCTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_129.png" /> J. COLQUIRI SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_130.png" /> JACARANDA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_131.png" /> JAIHUAYCO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_132.png" /> JAIME ZUDALEZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_133.png" /> JORGE WILSTERMAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_134.png" /> JOSE DAZA CARDENAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_135.png" /> JOSE MARTI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_136.png" /> JUAN DE LA ROSA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_137.png" /> JUAN XXIII<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_138.png" /> JUDICIAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_139.png" /> K´HARA K´HARA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_140.png" /> KENAMARI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_141.png" /> KHASAMAYU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_142.png" /> LA AGUADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_143.png" /> LA CABAÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_144.png" /> LA CAMPANA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_145.png" /> LA ESPERANZA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_146.png" /> LA GLORIETA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_147.png" /> LA RINCONADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_148.png" /> LA SALLE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_149.png" /> LA VERTIENTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_150.png" /> LAS AMERICAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_151.png" /> LAS DELICIAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_152.png" /> LAZO RANCHO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_153.png" /> LIBERTAD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_154.png" /> LINDA POZZI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_155.png" /> LINDE NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_156.png" /> LINDE SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_157.png" /> LITORAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_158.png" /> LOMAS DEL PAGADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_159.png" /> LORETO SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_160.png" /> LOS ALAMOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_161.png" /> LOS CEIVOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_162.png" /> LOS PINOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_163.png" /> MAGISTERIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_164.png" /> MAGISTERIO IV CENTENARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_165.png" /> MAGISTERIO PLAN 40<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_166.png" /> MAICA ARRIBA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_167.png" /> MAICA CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_168.png" /> MAICA CHICA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_169.png" /> MAICA NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_170.png" /> MAICA QUENAMARI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_171.png" /> MAICA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_172.png" /> MARIO TEJADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_173.png" /> MARISCAL SUCRE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_174.png" /> MARTIN CARDENAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_175.png" /> MARYKNOLL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_176.png" /> MEJILLONES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_177.png" /> MESADILLA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_178.png" /> MINERO SIGLO XX<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_179.png" /> MINEROS HUANUNI CONDEBAMBA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_180.png" /> MIRAFLORES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_181.png" /> MOISES ASBUN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_182.png" /> MOLLE MOLLE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_183.png" /> MOLLE MOLLE CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_184.png" /> MOLLE MOLLE OESTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_185.png" /> MONTE CANTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_186.png" /> MULA MAYU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_187.png" /> MUYURINA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_188.png" /> NSTRA. SRA. DE GUADALUPE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_189.png" /> NUEVO AMANECER<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_190.png" /> NUEVO MILENIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_191.png" /> OASIS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_192.png" /> OTB VILLA MEJILLONES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_193.png" /> PACATA ALTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_194.png" /> PACATA ALTA PLAN 300<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_195.png" /> PACATA CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_196.png" /> PAJCHA NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_197.png" /> PAMPA GRANDE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_198.png" /> PAMPA SAN MIGUEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_199.png" /> PAMPA TICTI SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_200.png" /> PARDO RANCHO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_201.png" /> PARQUE EL MAESTRO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_202.png" /> PARQUE PIRAI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_203.png" /> PATRIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_204.png" /> PETROLERO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_205.png" /> PIL SARCOBAMBA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_206.png" /> PLAN 350 FORTALEZA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_207.png" /> PLAZA LIB. M. Q. SANTA CRUZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_208.png" /> POLITECNICO MILITAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_209.png" /> Portales<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_210.png" /> PORTALES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_211.png" /> PORVENIR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_212.png" /> PQ. UNIVERSITARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_213.png" /> PREFECTURAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_214.png" /> PRIMERO DE MAYO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_215.png" /> PROMOTORA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_216.png" /> PUCARITA CHICA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_217.png" /> PULACAYO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_218.png" /> QUECHISLA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_219.png" /> QUERU QUERU CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_220.png" /> QUIJARO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_221.png" /> RIOSINHO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_222.png" /> ROSEDAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_223.png" /> RUMI CERCO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_224.png" /> S. JOSE PLAN B<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_225.png" /> S. MIGUEL PAMPAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_226.png" /> SAMARITANO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_227.png" /> SAN  PEDRO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_228.png" /> SAN ANTONIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_229.png" /> SAN GABRIEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_230.png" /> SAN JORGE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_231.png" /> SAN JOSE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_232.png" /> SAN JOSE DE LA TAMBORADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_233.png" /> SAN JUAN BAUTISTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_234.png" /> SAN JUAN BOSCO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_235.png" /> SAN JUAN DE DIOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_236.png" /> SAN LORENZO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_237.png" /> SAN LUIS COPACABANA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_238.png" /> SAN MARCOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_239.png" /> san martin<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_240.png" /> SAN MIGUEL ALTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_241.png" /> SAN MIGUEL KM 4<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_242.png" /> SAN MIGUEL NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_243.png" /> SAN RAFAEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_244.png" /> SAN SIMON<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_245.png" /> SANTA ANA DE CALA CALA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_246.png" /> SANTA ANA DE MAYORASGO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_247.png" /> SANTA BARBARA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_248.png" /> SANTA BARBARA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_249.png" /> SANTA BARBARA SUD ESTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_250.png" /> SANTA FE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_251.png" /> SANTA ROSA CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_252.png" /> SANTO DOMINGO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_253.png" /> SARCO CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_254.png" /> SEBASTIAN PAGADOR I<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_255.png" /> SENAC<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_256.png" /> SEÑOR DE MAYO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_257.png" /> SERGIO ALMARAZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_258.png" /> SETON<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_259.png" /> SINDICATO AFRARIO TAQUIÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_260.png" /> SINDICATO AGRARIO ESTACION CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_261.png" /> SINDICATO AGRARIO MAICA KUSPICHACA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_262.png" /> SINDICATO HUASA HIGUERANI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_263.png" /> SIVINGANI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_264.png" /> SOLTERITO ALTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_265.png" /> SPR. NOR ESTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_266.png" /> SUMUMPAYA KULLCU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_267.png" /> SUMUMPAYA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_268.png" /> TACKO LOMA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_269.png" /> TAJRA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_270.png" /> TAMBORADA "A"<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_271.png" /> TAMBORADA "B"<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_272.png" /> TAMBORADO "C"<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_273.png" /> Taquiña C<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_274.png" /> TAQUIÑA NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_275.png" /> TEMPORAL CALA CALA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_276.png" /> TEMPORAL CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_277.png" /> TEMPORAL UNIFICADO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_278.png" /> TERCER GRUPO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_279.png" /> TERCERA VILLA NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_280.png" /> TERCERA VILLA SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_281.png" /> TICTI NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_282.png" /> TICTI SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_283.png" /> TINKA KHATU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_284.png" /> TOPATER<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_285.png" /> TRAFALGAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_286.png" /> TUNTI RANCHO EL PALMAR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_287.png" /> TUPURAYA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_288.png" /> UNIVERSITARIO ALTO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_289.png" /> URB. "SENAC"<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_290.png" /> URB. ALBORADA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_291.png" /> URB. BISA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_292.png" /> URB. COMTECO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_293.png" /> URB. ENTEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_294.png" /> URB. LA PAZ - ELFEC - CUCARDAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_295.png" /> URB. PETROLERA LAS DELICIAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_296.png" /> URB. SEMAPA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_297.png" /> UYUNI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_298.png" /> V. ANTOFAGASTA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_299.png" /> V. B. TOKIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_300.png" /> V. BELEN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_301.png" /> V. EXALTACION<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_302.png" /> V. GALINDO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_303.png" /> V. GRANADO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_304.png" /> V. INGAVI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_305.png" /> V. LITORAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_306.png" /> V. MERCEDES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_307.png" /> V. SANTA MONICA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_308.png" /> V. VICTORIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_309.png" /> VALLE HERMOSO CENTRAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_310.png" /> VALLE HERMOSO NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_311.png" /> VENEZUELA GPDC<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_312.png" /> VERBO DIVINO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_313.png" /> VICTOR PAZ ESTENZORO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_314.png" /> VIDRIO LUX<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_315.png" /> VILLA 14 DE SEPTIEMBRE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_316.png" /> VILLA AMERICA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_317.png" /> VILLA ARMONIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_318.png" /> VILLA BRASILIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_319.png" /> VILLA BUSCH NORTE<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_320.png" /> VILLA BUSCH SUD<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_321.png" /> VILLA CACTUS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_322.png" /> VILLA CANDELARIA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_323.png" /> VILLA CARLOS BERDECIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_324.png" /> VILLA COLON<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_325.png" /> VILLA COÑA COÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_326.png" /> VILLA CORONILLA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_327.png" /> VILLA COSMOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_328.png" /> VILLA EL SALVADOR<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_329.png" /> VILLA GRACIELA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_330.png" /> VILLA HUANUNI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_331.png" /> VILLA ISRAEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_332.png" /> VILLA JARKAS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_333.png" /> VILLA JERUSALEM<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_334.png" /> VILLA LA CABAÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_335.png" /> VILLA LUZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_336.png" /> VILLA LUZ URKUPIÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_337.png" /> VILLA MOSCU<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_338.png" /> VILLA NUEVA STA. VERA CURZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_339.png" /> VILLA PARAISO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_340.png" /> VILLA POTOSI<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_341.png" /> VILLA PRES. GRAL. R. BARRIENTOS<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_342.png" /> VILLA PROGRESO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_343.png" /> VILLA ROSARIO<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_344.png" /> VILLA SAN ANDRES<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_345.png" /> VILLA SAN MIGUEL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_346.png" /> VILLA SANTA CRUZ<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_347.png" /> VILLA TQUIÑA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_348.png" /> VILLA VENEZUELA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_349.png" /> VIRGEN DE LUJAN<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_350.png" /> W. ROSEDAL<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_351.png" /> WARA WARA<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_352.png" /> Zona constitucion<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_353.png" /> Zona parque del niño<br />\
    <img src="styles/legend/OTB_Cercado_2015_4_354.png" /> <br />'
        });
var lyr_INDV_Sep_2020_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "INDV_Sep_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/INDV_Sep_2020_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7557172.957917, -2086441.574875, -7312435.677240, -1836514.686398]
                            })
                        });
var lyr_INDV_Ene_2020_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "INDV_Ene_2020",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/INDV_Ene_2020_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-7380504.842905, -1984068.008173, -7352699.676097, -1943859.889005]
                            })
                        });
var format_Areas_Verdes_PTDI2016_7 = new ol.format.GeoJSON();
var features_Areas_Verdes_PTDI2016_7 = format_Areas_Verdes_PTDI2016_7.readFeatures(json_Areas_Verdes_PTDI2016_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Areas_Verdes_PTDI2016_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Verdes_PTDI2016_7.addFeatures(features_Areas_Verdes_PTDI2016_7);
var lyr_Areas_Verdes_PTDI2016_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Areas_Verdes_PTDI2016_7, 
                style: style_Areas_Verdes_PTDI2016_7,
                interactive: true,
    title: 'Areas_Verdes_PTDI2016<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_0.png" /> Área Agropecuaria<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_1.png" /> Área de Equipamiento Especial y Preservación Paisajística Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_2.png" /> Área de Equipamientos Especiales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_3.png" /> Área de Equipamientos Sociales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_4.png" /> Área de Equipamientos Urbano Regionales<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_5.png" /> Área de Mitigación Ambiental y Jerarquización de la Estructura Natural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_6.png" /> Área de Preservación e Integración Paisajística<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_7.png" /> Área de Preservación Natural y Dinamización Cultural<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_8.png" /> Área de Protección y Bioregulación Ambiental<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_9.png" /> Área forestal<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_10.png" /> Área Industrial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_11.png" /> Áreas Verdes Afectadas<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_12.png" /> Áreas Verdes y de Recreación<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_13.png" /> Residencial<br />\
    <img src="styles/legend/Areas_Verdes_PTDI2016_7_14.png" /> <br />'
        });
var format_Rios_8 = new ol.format.GeoJSON();
var features_Rios_8 = format_Rios_8.readFeatures(json_Rios_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Rios_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_8.addFeatures(features_Rios_8);
var lyr_Rios_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rios_8, 
                style: style_Rios_8,
                interactive: true,
                title: '<img src="styles/legend/Rios_8.png" /> Rios'
            });
var format_Cuerpos_de_Agua_9 = new ol.format.GeoJSON();
var features_Cuerpos_de_Agua_9 = format_Cuerpos_de_Agua_9.readFeatures(json_Cuerpos_de_Agua_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuerpos_de_Agua_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuerpos_de_Agua_9.addFeatures(features_Cuerpos_de_Agua_9);
var lyr_Cuerpos_de_Agua_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuerpos_de_Agua_9, 
                style: style_Cuerpos_de_Agua_9,
                interactive: true,
                title: '<img src="styles/legend/Cuerpos_de_Agua_9.png" /> Cuerpos_de_Agua'
            });
var format_Cuencas_10 = new ol.format.GeoJSON();
var features_Cuencas_10 = format_Cuencas_10.readFeatures(json_Cuencas_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Cuencas_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuencas_10.addFeatures(features_Cuencas_10);
var lyr_Cuencas_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuencas_10, 
                style: style_Cuencas_10,
                interactive: true,
                title: '<img src="styles/legend/Cuencas_10.png" /> Cuencas'
            });
var format_Canal_de_Riego_11 = new ol.format.GeoJSON();
var features_Canal_de_Riego_11 = format_Canal_de_Riego_11.readFeatures(json_Canal_de_Riego_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Canal_de_Riego_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Canal_de_Riego_11.addFeatures(features_Canal_de_Riego_11);
var lyr_Canal_de_Riego_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Canal_de_Riego_11, 
                style: style_Canal_de_Riego_11,
                interactive: true,
                title: '<img src="styles/legend/Canal_de_Riego_11.png" /> Canal_de_Riego'
            });
var format_Circuito_Ciclovia_12 = new ol.format.GeoJSON();
var features_Circuito_Ciclovia_12 = format_Circuito_Ciclovia_12.readFeatures(json_Circuito_Ciclovia_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Circuito_Ciclovia_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Circuito_Ciclovia_12.addFeatures(features_Circuito_Ciclovia_12);
var lyr_Circuito_Ciclovia_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Circuito_Ciclovia_12, 
                style: style_Circuito_Ciclovia_12,
                interactive: true,
    title: 'Circuito_Ciclovia<br />\
    <img src="styles/legend/Circuito_Ciclovia_12_0.png" /> <br />\
    <img src="styles/legend/Circuito_Ciclovia_12_1.png" /> Existente<br />\
    <img src="styles/legend/Circuito_Ciclovia_12_2.png" /> Posible Trazo<br />'
        });
var format_Buffer_Puntos_400m_13 = new ol.format.GeoJSON();
var features_Buffer_Puntos_400m_13 = format_Buffer_Puntos_400m_13.readFeatures(json_Buffer_Puntos_400m_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Buffer_Puntos_400m_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffer_Puntos_400m_13.addFeatures(features_Buffer_Puntos_400m_13);
var lyr_Buffer_Puntos_400m_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffer_Puntos_400m_13, 
                style: style_Buffer_Puntos_400m_13,
                interactive: true,
                title: '<img src="styles/legend/Buffer_Puntos_400m_13.png" /> Buffer_Puntos_400m'
            });
var format_Puntos_Muestreo_14 = new ol.format.GeoJSON();
var features_Puntos_Muestreo_14 = format_Puntos_Muestreo_14.readFeatures(json_Puntos_Muestreo_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Puntos_Muestreo_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntos_Muestreo_14.addFeatures(features_Puntos_Muestreo_14);
var lyr_Puntos_Muestreo_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntos_Muestreo_14, 
                style: style_Puntos_Muestreo_14,
                interactive: true,
                title: '<img src="styles/legend/Puntos_Muestreo_14.png" /> Puntos_Muestreo'
            });
var format_Data_Loggers_15 = new ol.format.GeoJSON();
var features_Data_Loggers_15 = format_Data_Loggers_15.readFeatures(json_Data_Loggers_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Data_Loggers_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Data_Loggers_15.addFeatures(features_Data_Loggers_15);
var lyr_Data_Loggers_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Data_Loggers_15, 
                style: style_Data_Loggers_15,
                interactive: true,
                title: '<img src="styles/legend/Data_Loggers_15.png" /> Data_Loggers'
            });
var format_Potenciales_Puntos_16 = new ol.format.GeoJSON();
var features_Potenciales_Puntos_16 = format_Potenciales_Puntos_16.readFeatures(json_Potenciales_Puntos_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_Potenciales_Puntos_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Potenciales_Puntos_16.addFeatures(features_Potenciales_Puntos_16);
var lyr_Potenciales_Puntos_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Potenciales_Puntos_16, 
                style: style_Potenciales_Puntos_16,
                interactive: true,
                title: '<img src="styles/legend/Potenciales_Puntos_16.png" /> Potenciales_Puntos'
            });
var group_HIDROGRAFA = new ol.layer.Group({
                                layers: [lyr_Rios_8,lyr_Cuerpos_de_Agua_9,lyr_Cuencas_10,lyr_Canal_de_Riego_11,],
                                title: "HIDROGRAFÍA"});
var group_AREASVERDES = new ol.layer.Group({
                                layers: [lyr_INDV_Sep_2020_5,lyr_INDV_Ene_2020_6,lyr_Areas_Verdes_PTDI2016_7,],
                                title: "AREAS VERDES"});
var group_LIMITESADMINISTRATIVOS = new ol.layer.Group({
                                layers: [lyr_Lmites_Distritales_3,lyr_OTB_Cercado_2015_4,],
                                title: "LIMITES ADMINISTRATIVOS"});
var group_MAPASBASE = new ol.layer.Group({
                                layers: [lyr_Stamen_0,lyr_GoogleSatellite_1,lyr_GoogleMaps_2,],
                                title: "MAPAS BASE"});

lyr_Stamen_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_GoogleMaps_2.setVisible(true);lyr_Lmites_Distritales_3.setVisible(true);lyr_OTB_Cercado_2015_4.setVisible(true);lyr_INDV_Sep_2020_5.setVisible(true);lyr_INDV_Ene_2020_6.setVisible(true);lyr_Areas_Verdes_PTDI2016_7.setVisible(true);lyr_Rios_8.setVisible(true);lyr_Cuerpos_de_Agua_9.setVisible(true);lyr_Cuencas_10.setVisible(true);lyr_Canal_de_Riego_11.setVisible(true);lyr_Circuito_Ciclovia_12.setVisible(true);lyr_Buffer_Puntos_400m_13.setVisible(true);lyr_Puntos_Muestreo_14.setVisible(true);lyr_Data_Loggers_15.setVisible(true);lyr_Potenciales_Puntos_16.setVisible(true);
var layersList = [group_MAPASBASE,group_LIMITESADMINISTRATIVOS,group_AREASVERDES,group_HIDROGRAFA,lyr_Circuito_Ciclovia_12,lyr_Buffer_Puntos_400m_13,lyr_Puntos_Muestreo_14,lyr_Data_Loggers_15,lyr_Potenciales_Puntos_16];
lyr_Lmites_Distritales_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'COMUNA': 'COMUNA', 'ADDRESS': 'ADDRESS', 'NRO_TEL': 'NRO_TEL', 'SHAPE_LENG': 'SHAPE_LENG', 'DISTRITO': 'DISTRITO', 'DISTRITO_1': 'DISTRITO_1', 'HA': 'HA', 'NOMBRE_D': 'NOMBRE_D', });
lyr_OTB_Cercado_2015_4.set('fieldAliases', {'FID_otbs22': 'FID_otbs22', 'OTB_D9': 'OTB_D9', });
lyr_Areas_Verdes_PTDI2016_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'Uso_Suelo': 'Uso_Suelo', });
lyr_Rios_8.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'DREN_CUENC': 'DREN_CUENC', 'ELEVATION': 'ELEVATION', 'RIOS_PNT': 'RIOS_PNT', 'Shape_STLe': 'Shape_STLe', 'Shape_Leng': 'Shape_Leng', 'Name': 'Name', });
lyr_Cuerpos_de_Agua_9.set('fieldAliases', {'Id': 'Id', 'USO': 'USO', });
lyr_Cuencas_10.set('fieldAliases', {'TOTAL': 'TOTAL', });
lyr_Canal_de_Riego_11.set('fieldAliases', {'FID_': 'FID_', 'Entity': 'Entity', 'Level': 'Level', 'Layer': 'Layer', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'MsLink_DMR': 'MsLink_DMR', 'MsCtlg_DMR': 'MsCtlg_DMR', 'MsLink_D_1': 'MsLink_D_1', 'MsCtlg_D_1': 'MsCtlg_D_1', });
lyr_Circuito_Ciclovia_12.set('fieldAliases', {'Id': 'Id', 'KM': 'KM', });
lyr_Buffer_Puntos_400m_13.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'BUFF_DIST': 'BUFF_DIST', 'ORIG_FID': 'ORIG_FID', });
lyr_Puntos_Muestreo_14.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', 'Data_Log': 'Data_Log', });
lyr_Data_Loggers_15.set('fieldAliases', {'Id': 'Id', 'Name': 'Name', 'X_Este': 'X_Este', 'Y_Norte': 'Y_Norte', 'Prioridad': 'Prioridad', 'Zona': 'Zona', });
lyr_Potenciales_Puntos_16.set('fieldAliases', {'Name': 'Name', });
lyr_Lmites_Distritales_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'COMUNA': 'TextEdit', 'ADDRESS': 'TextEdit', 'NRO_TEL': 'TextEdit', 'SHAPE_LENG': 'TextEdit', 'DISTRITO': 'TextEdit', 'DISTRITO_1': 'TextEdit', 'HA': 'TextEdit', 'NOMBRE_D': 'TextEdit', });
lyr_OTB_Cercado_2015_4.set('fieldImages', {'FID_otbs22': 'Range', 'OTB_D9': 'TextEdit', });
lyr_Areas_Verdes_PTDI2016_7.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'Uso_Suelo': 'TextEdit', });
lyr_Rios_8.set('fieldImages', {'OBJECTID': 'TextEdit', 'DREN_CUENC': 'TextEdit', 'ELEVATION': 'TextEdit', 'RIOS_PNT': 'TextEdit', 'Shape_STLe': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Name': 'TextEdit', });
lyr_Cuerpos_de_Agua_9.set('fieldImages', {'Id': 'TextEdit', 'USO': 'TextEdit', });
lyr_Cuencas_10.set('fieldImages', {'TOTAL': 'TextEdit', });
lyr_Canal_de_Riego_11.set('fieldImages', {'FID_': 'TextEdit', 'Entity': 'TextEdit', 'Level': 'TextEdit', 'Layer': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'MsLink_DMR': 'TextEdit', 'MsCtlg_DMR': 'TextEdit', 'MsLink_D_1': 'TextEdit', 'MsCtlg_D_1': 'TextEdit', });
lyr_Circuito_Ciclovia_12.set('fieldImages', {'Id': 'TextEdit', 'KM': 'TextEdit', });
lyr_Buffer_Puntos_400m_13.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'BUFF_DIST': 'TextEdit', 'ORIG_FID': 'TextEdit', });
lyr_Puntos_Muestreo_14.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', 'Data_Log': 'Range', });
lyr_Data_Loggers_15.set('fieldImages', {'Id': 'Range', 'Name': 'TextEdit', 'X_Este': 'TextEdit', 'Y_Norte': 'TextEdit', 'Prioridad': 'Range', 'Zona': 'TextEdit', });
lyr_Potenciales_Puntos_16.set('fieldImages', {'Name': 'TextEdit', });
lyr_Lmites_Distritales_3.set('fieldLabels', {});
lyr_OTB_Cercado_2015_4.set('fieldLabels', {});
lyr_Areas_Verdes_PTDI2016_7.set('fieldLabels', {});
lyr_Rios_8.set('fieldLabels', {});
lyr_Cuerpos_de_Agua_9.set('fieldLabels', {});
lyr_Cuencas_10.set('fieldLabels', {});
lyr_Canal_de_Riego_11.set('fieldLabels', {});
lyr_Circuito_Ciclovia_12.set('fieldLabels', {'Id': 'no label', 'KM': 'no label', });
lyr_Buffer_Puntos_400m_13.set('fieldLabels', {'Id': 'no label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'BUFF_DIST': 'no label', 'ORIG_FID': 'no label', });
lyr_Puntos_Muestreo_14.set('fieldLabels', {'Id': 'inline label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', 'Data_Log': 'no label', });
lyr_Data_Loggers_15.set('fieldLabels', {'Id': 'inline label', 'Name': 'no label', 'X_Este': 'no label', 'Y_Norte': 'no label', 'Prioridad': 'no label', 'Zona': 'no label', });
lyr_Potenciales_Puntos_16.set('fieldLabels', {'Name': 'no label', });
lyr_Potenciales_Puntos_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});