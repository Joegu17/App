var scorePopu;
var scoreSize;
var scoreElev;
var db;
function initDB() {
    db = window.openDatabase('Database', 1.0, 'AppGame', 2097152);
    db.transaction(createTB, errorCB);
}

function createTB(tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS Scores(id, scorepopulation, scoresize, scoreelevation)');
}
function errorCB(err) {
    alert(err);
}

function insertData() {
    db.transaction(function(tx) {
        tx.executeSql('INSERT INTO Scores(id, scorepopulation, scoresize, scoreelevation) values(0,0,0,0)') 
    });
}

function getScorePopu() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT scorepopulation FROM Scores WHERE id = ?', [0], function(tx, results) {
            var score1 = results.rows.item(0);
            scorePopu = score1.scorepopulation;
            $('#text14').html('Top Score: '+scorePopu);
            $('#text17').html('Top Score: '+scorePopu);
        });
    });
}
function getScoreSize() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT scoresize FROM Scores WHERE id = ?', [0], function(tx, results) {
            var score1 = results.rows.item(0);
            scoreSize = score1.scoresize;
            $('#text14').html('Top Score: '+scoreSize);
            $('#text17').html('Top Score: '+scoreSize);
        });
    });
}
function getScoreElev() {
    db.transaction(function(tx) {
        tx.executeSql('SELECT scoreelevation FROM Scores WHERE id = ?', [0], function(tx, results) {
            var score1 = results.rows.item(0);
            scoreElev = score1.scoreelevation;
            $('#text14').html('Top Score: '+scoreElev);
            $('#text17').html('Top Score: '+scoreElev);
        });
    });
}
function setScorePopu(scorePopulation) {
    db.transaction(function(tx) {
        tx.executeSql('UPDATE Scores SET scorepopulation = '+scorePopulation+' WHERE id = 0');
    });
}
function setScoreSize(scoreSizes) {
    db.transaction(function(tx) {
        tx.executeSql('UPDATE Scores SET scoresize = '+scoreSizes+' WHERE id = 0');
    });
}
function setScoreElev(scoreElevation) {
    db.transaction(function(tx) {
        tx.executeSql('UPDATE Scores SET scoreelevation = '+scoreElevation+' WHERE id = 0');
    });
}

function handleError(err) {
    alert(err);
}

initDB();
insertData();

//[Code, Name, Population, Size, Elevation]
var data = [                        //http://www.worldometers.info/world-population/population-by-country/
    ['ad', 'Andorra', 76965, 470, 2942],
    ['ae', 'U.A.E.'/*'United Arab Emirates'*/, 9400145, 83600, 1910],
    ['af', 'Afghanistan', 35530081, 652860, 7492],
    ['ag', 'Antigua & Barbuda', 102012, 440, 402],
    ['ai', 'Anguilla', 14909, 90, 65],
    ['al', 'Albania', 2930187, 27400, 2764],
    ['am', 'Armenia', 2930450, 28470, 4090],
    ['ao', 'Angola', 29784193, 1246700, 2620],
    ['ar', 'Argentina', 44271041, 2736690, 6960],
    ['as', 'American Samoa', 55641, 200, 966],
    ['at', 'Austria', 8735453, 82409, 3798],
    ['au', 'Australia', 24450561, 7682300, 2228],
    ['aw', 'Aruba', 105264, 180, 188],
    //['ax', 'Âland', , , , , ],
    ['az', 'Azerbaijan', 9827589, 82658, 4485],
    ['ba', 'Bosnia & Herzegovina', 3507017, 51000, 2386],
    ['bb', 'Barbados', 285719, 430, 336],
    ['bd', 'Bangladesh', 164669751, 130170, 1052],
    ['be', 'Belgium', 11429336, 30280, 694],
    ['bf', 'Burkina Faso', 19193382, 273600, 749],
    ['bg', 'Bulgaria', 7084571, 108560, 2925],
    ['bh', 'Bahrain', 1492584, 760, 122],
    ['bi', 'Burundi', 10864245, 25680, 2684],
    ['bj', 'Benin', 11175692, 112760, 658],
    //['bl', 'Saint Barthélemy', , , , , ],
    ['bm', 'Bermuda', 61349, 50, 76],
    ['bn', 'Brunei Darussalam', 428697, 5270, 1850],
    ['bo', 'Bolivia', 11051600, 1083300, 6542],
    //['bq', 'Caribbean Netherlands', 25398, 328],
    ['br', 'Brazil', 209288278, 8358140, 2995],
    ['bs', 'Bahamas', 395361, 10010, 63],
    ['bt', 'Bhutan', 807610, 38117, 7570],
    //['bv', 'Bouvet Island', , , , , ],
    ['bw', 'Botswana', 2291661, 566730, 1491],
    ['by', 'Belarus', 9468338, 202910, 346],
    ['bz', 'Belize', 374681, 22810, 1124],
    ['ca', 'Canada', 36624199, 9093510, 5959],
    //['cc', 'Cocos Islands', , , , , ],
    ['cd', 'D.R. Congo'/*'Democratic Republic of the Congo'*/, 61339988, 2267050, 5109],
    ['cf', 'Central African Republic', 4659080, 622980, 1420],
    ['cg', 'Congo', 5260750, 341500, 1020],
    ['ch', 'Switzerland', 8476005, 39516, 4634],
    ['ci', "Cote D'Ivoire", 24294750, 318000, 1752],
    ['ck', 'Cook Islands', 17380, 240, 652],
    ['cl', 'Chile', 18054726, 743532, 6893],
    ['cm', 'Cameroon', 24053727, 472710, 4040],
    ['cn', 'China', 1409517397, 9388211, 8848],
    ['co', 'Colombia', 49065615, 1109500, 5700],
    ['cr', 'Costa Rica', 4905769, 51060, 3820],
    ['cu', 'Cuba', 11484636, 106440, 1974],
    ['cv', 'Cape Verde', 546388, 4030, 2829],
    ['cw', 'Curaçao', 160539, 444, 375],
    //['cx', 'Christmas Island', , , , , ],
    ['cy', 'Cyprus', 1179551, 9240, 1951],
    ['cz', 'Czech Republic', 10618303, 77240, 1603],
    ['de', 'Germany', 82114224, 348560, 2962],
    ['dj', 'Djibouti', 956985, 23180, 2028],
    ['dk', 'Denmark', 5733551, 42430, 171],
    ['dm', 'Dominica', 73925, 750, 1447],
    ['do', 'Dominican Republic', 10766998, 48320, 3098],
    ['dz', 'Algeria', 41318142, 2381740, 3003],
    ['ec', 'Ecuador', 16624858, 248360, 6267],
    ['ee', 'Estonia', 1309632, 42390, 318],
    ['eg', 'Egypt', 97553151, 995450, 2629],
    ['eh', 'Western Sahara', 552628, 266000, 605],
    ['er', 'Eritrea', 5068631, 101000, 3018],
    ['es', 'Spain', 46354321, 498800, 3718],
    ['et', 'Ethiopia', 104957438, 1000000, 4550],
    ['fi', 'Finland', 5523231, 303890, 1324],
    ['fj', 'Fiji', 905502, 18270, 1324],
    ['fk', 'Falkland Islands', 2910, 12170, 705],
    ['fm', 'Micronesia', 105544, 700, 782],
    ['fo', 'Faroe Islands', 49290, 1396, 880],
    ['fr', 'France', 64979548, 547557, 4810],
    ['ga', 'Gabon', 2025137, 257670, 1070],
    ['gb', 'Great Britain', 66181585, 241930, 1345],
    //['gb-eng', '', , , , , ],
    //['gb-nir', '', , , , , ],
    //['gb-sct', '', , , , , ],
    //['gb-wls', '', , , , , ],
    ['gd', 'Grenada', 107825, 340, 840],
    ['ge', 'Georgia', 3912061, 69490, 5201],
    ['gf', 'French Guiana', 282731, 82200, 851],
    //['gg', 'Guernsey', , , , , ],
    ['gh', 'Ghana', 28833629, 227540, 880],
    ['gi', 'Gibraltar', 34571, 10, 426],
    ['gl', 'Greenland', 56480, 410450, 3700],
    ['gm', 'Gambia', 2100568, 10120, 53],
    ['gn', 'Guinea', 12717176, 245720, 1752],
    ['gp', 'Guadeloupe', 449568, 1690, 1484],
    ['gq', 'Equatorial Guinea', 1267689, 28050, 3008],
    ['gr', 'Greece', 11159773, 128900, 2919],
    //['gs', 'South Georgia and South Sandwich Islands', , , , , ],
    ['gt', 'Guatemala', 16913503, 107160, 4220],
    ['gu', 'Guam', 164229, 540, 406],
    ['gw', 'Guinea-Bissau', 1861283, 28120, 300],
    ['gy', 'Guyana', 77859, 196850, 2750],
    ['hk', 'Hong Kong', 7364883, 1050, 958],
    //['hm', 'Heard and McDonald Islands', , , , , ],
    ['hn', 'Honduras', 9265067, 111890, 2870],
    ['hr', 'Croatia', 4189353, 55960, 1831],
    ['ht', 'Haiti', 10981229, 27560, 2680],
    ['hu', 'Hungary', 9721559, 90530, 1014],
    ['id', 'Indonesia', 263991379, 1811570, 4884],
    ['ie', 'Ireland', 4761657, 68890, 1038],
    ['il', 'Israel', 6321570, 21640, 1208],
    ['im', 'Isle of Man', 84287, 570, 621],
    ['in', 'India', 1339180127, 2973190, 8586],
    //['io', 'British Indian Ocean Territory', , , , , ],
    ['iq', 'Iraq', 38274618, 434320, 3611],
    ['ir', 'Iran', 81162788, 1628550, 5610],
    ['is', 'Iceland', 335025, 100250, 2110],
    ['it', 'Italy', 59359900, 294140, 4810],
    //['je', 'Jersey', , , , , ],
    ['jm', 'Jamaica', 2890299, 10830, 2256],
    ['jo', 'Jordan', 9702353, 88780, 1854],
    ['jp', 'Japan', 127484450, 364555, 3776],
    ['ke', 'Kenya', 49699862, 569140, 5199],
    ['kg', 'Kyrgyzstan', 6045117, 191800, 7439],
    ['kh', 'Cambodia', 16005373, 176520, 1810],
    ['ki', 'Kiribati', 116398, 810, 81],
    ['km', 'Comoros', 813912, 1861, 2360],
    ['kn', 'St. Kitts & Nevis', 55345, 260, 1156],
    ['kp', 'North Korea', 25490965, 120410, 2744],
    ['kr', 'South Korea', 50982212, 97230, 1950],
    ['kw', 'Kuwait', 4136528, 17820, 306],
    ['ky', 'Cayman Islands', 61559, 240, 46],
    ['kz', 'Kazakhstan', 18204499, 2699700, 7010],
    ['la', 'Laos', 6858160, 230800, 2817],
    ['lb', 'Lebanon', 6082357, 10230, 3088],
    ['lc', 'Saint Lucia', 178844, 610, 950],
    ['li', 'Lichtenstein', 37992, 160, 2599],
    ['lk', 'Sri Lanka', 20876917, 62710, 2524],
    ['lr', 'Liberia', 4731906, 96320, 1440],
    ['ls', 'Lesotho', 2233339, 30360, 3482],
    ['lt', 'Lithuania', 2890297, 62674, 294],
    ['lu', 'Luxembourg', 583455, 2590, 560],
    ['lv', 'Latvia', 1949670, 62200, 312],
    ['ly', 'Libya', 6374616, 1759540, 2267],
    ['ma', 'Morocco', 35739580, 446300, 4165],
    ['mc', 'Monaco', 38695, 2, 161],
    ['md', 'Moldova', 4051212, 32850, 430],
    ['me', 'Montenegro', 628960, 13450, 2534],
    //['mf', 'Saint Martin', , , , , ],
    ['mg', 'Madagascar', 25570895, 581795, 2876],
    ['mh', 'Marshall Islands', 53127, 180, 10],
    ['mk', 'Macedonia', 2083160, 25220, 2764],
    ['ml', 'Mali', 18541980, 1220190, 1155],
    ['mm', 'Myanmar', 53370609, 653290, 5881],
    ['mn', 'Mongolia', 3075647, 1553560, 4374],
    ['mo', 'Macau', 622567, 30, 172],
    ['mp', 'Northern Mariana Islands', 55144, 460, 965],
    ['mq', 'Martinique', 384896, 1060, 1397],
    ['mr', 'Mauritania', 4420184, 1030700, 915],
    ['ms', 'Montserrat', 5177, 100, 915],
    ['mt', 'Malta', 430835, 320, 253],
    ['mu', 'Mauritius', 1265138, 2030, 828],
    ['mv', 'Maldives', 436330, 300, 2],
    ['mw', 'Malawi', 18622104, 94280, 3002],
    ['mx', 'Mexico', 129163276, 1943950, 5636],
    ['my', 'Malaysia', 31624264, 328550, 4095],
    ['mz', 'Mozambique', 29668834, 786380, 2436],
    ['na', 'Namibia', 2533794, 823290, 2573],
    ['nc', 'New Caledonia', 276255, 18280, 1628],
    ['ne', 'Niger', 21477348, 1266700, 2022],
    //['nf', 'Norfolk Island', , , , , ],
    ['ng', 'Nigeria', 190886311, 910770, 2419],
    ['ni', 'Nicaragua', 6217581, 120340, 2107],
    ['nl', 'Netherlands', 17035938, 33720, 887],
    ['no', 'Norway', 5305383, 365268, 2469],
    ['np', 'Nepal', 29304998, 143350, 8848],
    ['nr', 'Nauru', 11359, 20, 71],
    ['nu', 'Niue', 1618, 260, 68],
    ['nz', 'New Zealand', 4705818, 263310, 3724],
    ['om', 'Oman', 4636262, 309500, 3009],
    ['pa', 'Panama', 4098587, 74340, 3475],
    ['pe', 'Peru', 32165485, 1280000, 6768],
    ['pf', 'French Polynesia', 283007, 3660, 2241],
    ['pg', 'Papua New Guinea', 8251162, 452860, 4509],
    ['ph', 'Philippines', 104918090, 298170, 2954],
    ['pk', 'Pakistan', 197015955, 770880, 8611],
    ['pl', 'Poland', 38170712, 306230, 2499],
    ['pm', 'St. Pierre & Miquelon', 6320, 230, 240],        //max width on 16:9
    //['pn', 'Pitcairn', , , , , ],
    ['pr', 'Puerto Rico', 3663131, 8870, 1338],
    //['ps', 'Palestine', , , , , ],
    ['pt', 'Portugal', 10329506, 91590, 2351],
    ['pw', 'Palau', 21729, 460, 242],
    ['py', 'Paraguay', 6811297, 397300, 842],
    ['qa', 'Qatar', 2639211, 11610, 103],
    ['re', 'Réunion', 876562, 2500, 3069],
    ['ro', 'Romania', 19679306, 230170, 2544],
    ['rs', 'Serbia', 8790574, 87460, 2169],
    ['ru', 'Russia', 143989754, 16376870, 5642],
    ['rw', 'Rwanda', 12208407, 24670, 4507],
    ['sa', 'Saudi Arabia', 32938213, 2149690, 3000],
    ['sb', 'Solomon Islands', 611343, 27990, 2335],
    ['sc', 'Seychelles', 94737, 460, 905],
    ['sd', 'Sudan', 40533330, 1765048, 3042],
    ['se', 'Sweden', 9910701, 410340, 2104],
    ['sg', 'Singapore', 5708844, 700, 164],
    ['sh', 'St. Helena', 4049, 390, 2060],
    ['si', 'Slovenia', 2079976, 20140, 2864],
    //['sj', 'Svalbard and Jan Mayen Islands', , , , , ],
    ['sk', 'Slovakia', 5447662, 48088, 2655],
    ['sl', 'Sierra Leone', 7557212, 72180, 1948],
    ['sm', 'San Marino', 33400, 60, 755],
    ['sn', 'Senegal', 15850567, 192530, 648],
    ['so', 'Somalia', 14742523, 627340, 2450],
    ['sr', 'Suriname', 563402, 156000, 1230],
    ['ss', 'South Sudan', 12575714, 610952, 3187],
    ['st', 'Sao Tome & Principe', 204327, 960, 2024],
    ['sv', 'El Salvador', 6377853, 20720, 2730],
    ['sx', 'Sint Maarten', 40120, 34, 383],
    ['sy', 'Syria', 18269868, 183630, 2814],
    ['sz', 'Swaziland', 1367254, 17200, 1862],
    ['tc', 'Turks & Caicos Islands', 35446, 950, 49],
    ['td', 'Chad', 14899994, 1259200, 3445],
    //['tf', 'French Southern Territories', , , , , ],
    ['tg', 'Togo', 7797694, 54390, 986],
    ['th', 'Thailand', 69037513, 510890, 2565],
    ['tj', 'Tajikistan', 8921343, 139960, 7495],
    ['tk', 'Tokelau', 1300, 10, 5],
    ['tl', 'East Timor', 1296311, 14870, 2963],
    ['tm', 'Turkmenistan', 5758075, 469930, 3139],
    ['tn', 'Tunisia', 11532127, 155360, 1544],
    ['to', 'Tonga', 108020, 720, 1033],
    ['tr', 'Turkey', 80745020, 769630, 5137],
    ['tt', 'Trinidad & Tobago', 11532127, 155360, 940],
    ['tv', 'Tuvalu', 11192, 30, 5],
    ['tw', 'Taiwan', 23626456, 35410, 3952],
    ['tz', 'Tanzania', 57310019, 885800, 5862],
    ['ua', 'Ukraine', 44222947, 579320, 2061],
    ['ug', 'Uganda', 42862958, 199810, 5109],
    //['um', 'US Minor Outlying Islands', , , , , ],
    ['us', 'U.S.A.'/*'United States of America'*/, 324459463, 9147420, 6190],
    ['uy', 'Uruguay', 3456750, 175020, 514],
    ['uz', 'Uzbekistan', 31910641, 425400, 4643],
    ['va', 'Vatican City State', 792, 1, 75],
    ['vc', 'St. Vincent & the Grenadines', 109897, 390, 1234],
    ['ve', 'Venezuela', 31977065, 882050, 4978],
    ['vg', 'British Virgin Islands', 31196, 150, 521],
    ['vi', 'U.S. Virgin Islands', 104901, 350, 474],
    ['vn', 'Viet Nam', 95540800, 310070, 3143],
    ['vu', 'Vanuatu', 276244, 12190, 1877],
    ['wf', 'Wallis & Futuna Islands', 11773, 140, 524],
    ['ws', 'Samoa', 196440, 2830, 1857],
    ['ye', 'Yemen', 28250420, 527970, 3666],
    ['yt', 'Mayotte', 253045, 375, 660],
    ['za', 'South Africa', 56717156, 97230, 3450],
    ['zm', 'Zambia', 17094130, 743390, 2329],
    ['zw', 'Zimbabwe', 16529904, 386850, 2592],
]

var c1,
    c2,
    c3;

var cat = 2;     //category: 2 = Population; 3 = Size; 4 = Elevation

var maxFPS = 60,
    fpsw = 0,
    lastFrameTimeMs = 0,
    delta = 0,
    timestep = 1000/60,
    framesThisSecond = 0,
    lastFpsUpdate = 0;

var countActive = false,
    plusPoints,
    countingPoints,
    answer = false,
    goingOn = false,
    changingDiv = 1,
    transform1 = 1,
    transform2 = 2,
    transform3 = 3,
    score,
    totalPoints = 0,
    alreadyTouching = false;

function start() {
    switch (cat) {
        case 2:
            getScorePopu();
            break;
        case 3:
            getScoreSize();
            break;
        case 4:
            getScoreElev();
            break;
    }
    $('#mainMenu').fadeIn(250, function() {
        higher.addEventListener('touchstart', function(){if(!alreadyTouching){$('#higher_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        higher.addEventListener('touchend', higherEnd);
        lower.addEventListener('touchstart', function(){if(!alreadyTouching){$('#lower_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        lower.addEventListener('touchend', lowerEnd);
        play.addEventListener('touchstart', function(){if(!alreadyTouching){$('#button1_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        play.addEventListener('touchend', playEnd);
        category.addEventListener('touchstart', function(){if(!alreadyTouching){$('#button2_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        category.addEventListener('touchend', categoryEnd);
        population.addEventListener('touchstart', function(){if(!alreadyTouching){$('#button3_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        population.addEventListener('touchend', populationEnd);
        area.addEventListener('touchstart', function(){if(!alreadyTouching){$('#button4_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        area.addEventListener('touchend', areaEnd);
        elevation.addEventListener('touchstart', function(){if(!alreadyTouching){$('#button5_pressed').css({display: 'inherit'});alreadyTouching = true;}});
        elevation.addEventListener('touchend', elevationEnd);
    });
}

function init() {
    $('#mainMenu').fadeOut(250, function() {
        alreadyTouching = false;
        c1 = getRandomInt(0, data.length - 1);
        c2 = getRandomInt(0, data.length - 1);
        c3 = getRandomInt(0, data.length - 1);
        while (c2 == c1) {
            c2 = getRandomInt(0, data.length - 1);
        }
        while (c3 == c2 || c3 == c1) {
            c3 = getRandomInt(0, data.length - 1);
        }
        
        var div1 = document.createElement("div");
        div1.id = "div1"
        div1.style.position = "fixed";
        div1.style.width = "100%";
        div1.style.height = "50%";
        div1.style.top = "100%";
        div1.style.left = "0px";
        div1.style.backgroundImage = "url('images/4x3/"+data[c1][0]+".svg')";
        div1.style.backgroundPosition = "center";
        div1.style.backgroundSize = "cover";
        document.getElementById("background").appendChild(div1);

        var div2 = document.createElement("div");
        div2.id = "div2"
        div2.style.position = "fixed";
        div2.style.width = "100%";
        div2.style.height = "50%";
        div2.style.top = "100%";
        div2.style.left = "0px";
        div2.style.backgroundImage = "url('images/4x3/"+data[c2][0]+".svg')";
        div2.style.backgroundPosition = "center";
        div2.style.backgroundSize = "cover";
        document.getElementById("background").appendChild(div2);

        var div3 = document.createElement("div");
        div3.id = "div3"
        div3.style.position = "fixed";
        div3.style.width = "100%";
        div3.style.height = "50%";
        div3.style.top = "100%";
        div3.style.left = "0px";
        div3.style.backgroundImage = "url('images/4x3/"+data[c3][0]+".svg')";
        div3.style.backgroundPosition = "center";
        div3.style.backgroundSize = "cover";
        document.getElementById("background").appendChild(div3);

        $('#div1').css('transform', 'translate3d(0px, -200%, 0px)');
        $('#div2').css('transform', 'translate3d(0px, -100%, 0px)');
        $('#div1').css({'transition-duration': '1s'});
        $('#div2').css({'transition-duration': '1s'});
        $('#div3').css({'transition-duration': '1s'});
        
        $('#text1').html(data[c1][1]);
        switch (cat) {
            case 2:
                $('#text3').html(data[c1][cat].toLocaleString());
                break;
            case 3:
                $('#text3').html(data[c1][cat].toLocaleString() + ' km&sup2;');
                break;
            case 4:
                $('#text3').html(data[c1][cat].toLocaleString() + ' m');
                break;
        }
        $('#text5').html(data[c2][1]);
        
        switch (cat) {
            case 2:
                $('#text2').html('has');
                $('#text6').html('has');
                $('#text4').html('Inhabitants');
                $('#text8').html('Inhabitants');
                $('#text9').html('more');
                $('#text10').html('less');
                break;
            case 3:
                $('#text2').html('has a');
                $('#text6').html('has a');
                $('#text4').html('Area');
                $('#text8').html('Area');
                $('#text9').html('bigger');
                $('#text10').html('smaller');
                break;
            case 4:
                $('#text2').html('has a');
                $('#text6').html('has a');
                $('#text4').html('max. Elevation');
                $('#text8').html('max. Elevation');
                $('#text9').html('higher');
                $('#text10').html('lower');
                break;
        }
        
        changingDiv = 1;
        transform1 = 1;
        transform2 = 2;
        transform3 = 3;
        score = 0;
        $('#text13').html('Score: '+score);

        $('#mainMenu').css({display: 'none'});
        $('#game').fadeIn(250);
    });
}

function correct() {
    $('#text9').css({display: 'none'});
    $('#text10').css({display: 'none'});
    $('#higher').css({display: 'none'});
    $('#lower').css({display: 'none'});
    $('#text7').css({display: 'inherit'});
    
    alreadyTouching = false;
    plusPoints = data[c2][cat]/60;
    countingPoints = 0;
    switch (cat) {
        case 2:
            $('#text7').html(countingPoints.toLocaleString());
            break;
        case 3:
            $('#text7').html(countingPoints.toLocaleString() + ' km&sup2;');
            break;
        case 4:
            $('#text7').html(countingPoints.toLocaleString() + ' m');
            break;
    }
    countActive = true;
    
    if (!answer) {
        totalPoints += score;
        if (totalPoints >= 10) {  
            totalPoints -= 10;
            window.setTimeout(showInterstitialAd, 800);
        }
    }
}

function moveCountry() {
    c1 = c2;
    c2 = c3;
    c3 = getRandomInt(0, data.length - 1);
    while (c3 == c2 || c3 == c1) {
        c3 = getRandomInt(0, data.length - 1);
    }
    $('#ontop').fadeOut(500, function() {
        $('#text1').html(data[c1][1]);
        switch (cat) {
            case 2:
                $('#text3').html(data[c1][cat].toLocaleString());
                break;
            case 3:
                $('#text3').html(data[c1][cat].toLocaleString() + ' km&sup2;');
                break;
            case 4:
                $('#text3').html(data[c1][cat].toLocaleString() + ' m');
                break;
        }
        $('#text5').html(data[c2][1]);
        score++;
        $('#text13').html('Score: '+score);
        $('#text9').css({display: 'inherit'});
        $('#text10').css({display: 'inherit'});
        $('#higher').css({display: 'inherit'});
        $('#lower').css({display: 'inherit'});
        $('#text7').css({display: 'none'});
        $('#ontop').fadeIn(500);
    });
    $('#text7').fadeOut(500);
    
    $('#div1').css('transform', 'translate3d(0px, '+transform3*(-100)+'%, 0px)');
    $('#div2').css('transform', 'translate3d(0px, '+transform2*(-100)+'%, 0px)');
    $('#div3').css('transform', 'translate3d(0px, '+transform1*(-100)+'%, 0px)');
    window.setTimeout(getNewCountry, 1000);
}

function getNewCountry() {
    var elem = document.getElementById("div"+changingDiv);
    elem.parentNode.removeChild(elem);
    
    var div = document.createElement("div");
    div.id = "div"+changingDiv;
    div.style.position = "fixed";
    div.style.width = "100%";
    div.style.height = "50%";
    div.style.top = "100%";
    div.style.left = "0px";
    div.style.backgroundImage = "url('images/4x3/"+data[c3][0]+".svg')";
    div.style.backgroundPosition = "center";
    div.style.backgroundSize = "cover";
    div.style["transition-duration"] = "1s";
    document.getElementById("background").appendChild(div);
    
    changingDiv++;
    if (changingDiv == 4) {
        changingDiv = 1;
    }
    transform1++;
    transform2++;
    transform3++;
    if (transform1 == 4) {
        transform1 = 1;
    }
    if (transform2 == 4) {
        transform2 = 1;
    }
    if (transform3 == 4) {
        transform3 = 1;
    }
}

function reset() {
    switch (cat) {
        case 2:
            if (score > scorePopu) {
                setScorePopu(score);
                getScorePopu();
            }
            break;
        case 3:
            if (score > scoreSize) {
                setScoreSize(score);
                getScoreSize();
            }
            break;
        case 4:
            if (score > scoreElev) {
                setScoreElev(score);
                getScoreElev();
            }
            break;
    }
    
    $('#game').fadeOut(250, function() {
        var elem1 = document.getElementById("div1");
        elem1.parentNode.removeChild(elem1);
        var elem2 = document.getElementById("div2");
        elem2.parentNode.removeChild(elem2);
        var elem3 = document.getElementById("div3");
        elem3.parentNode.removeChild(elem3);
        $('#text9').css({display: 'inherit'});
        $('#text10').css({display: 'inherit'});
        $('#higher').css({display: 'inherit'});
        $('#lower').css({display: 'inherit'});
        $('#text7').css({display: 'none'});
        $('#game').css({display: 'none'});
        $('#mainMenu').fadeIn(250);
    });
}

function toCategory() {
    $('#mainMenu').fadeOut(250, function() {
        alreadyTouching = false;
        $('#categoryMenu').fadeIn(250);
    });
}

function toMenu() {
    $('#categoryMenu').fadeOut(250, function() {
        alreadyTouching = false;
        switch (cat) {
            case 2:
                getScorePopu();
                break;
            case 3:
                getScoreSize();
                break;
            case 4:
                getScoreElev();
                break;
        }
        $('#mainMenu').fadeIn(250);
    });
}

function gameLoop(timestamp) {
    
    if (timestamp < lastFrameTimeMs + (1000 / maxFPS)) {
        requestAnimationFrame(gameLoop);
        return;
    }
    
    delta += timestamp - lastFrameTimeMs;
    lastFrameTimeMs = timestamp;
    
    var numUpdatesSteps = 0;
    while (delta >= timestep) {
        
        if (countActive) {
            countingPoints += plusPoints;
            if (countingPoints >= data[c2][cat]) {
                countActive = false;
                countingPoints = data[c2][cat];
                switch (cat) {
                    case 2:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString());
                        break;
                    case 3:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString() + ' km&sup2;');
                        break;
                    case 4:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString() + ' m');
                        break;
                }
                if (answer) {
                    window.setTimeout(moveCountry, 1000);
                } else {
                    window.setTimeout(reset, 1000);
                }
            } else {
                switch (cat) {
                    case 2:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString());
                        break;
                    case 3:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString() + ' km&sup2;');
                        break;
                    case 4:
                        $('#text7').html(Math.floor(countingPoints).toLocaleString() + ' m');
                        break;
                }
            }
        }
        
        delta -= timestep;
        if (++numUpdatesSteps >= 240) {
            panic();
            break;
        }
    }
    
    window.requestAnimationFrame(gameLoop);
}

function panic() {
    delta = 0;
}
    
var higher = document.getElementById('higher'),
    lower = document.getElementById('lower'),
    play = document.getElementById('button1'),
    category = document.getElementById('button2'),
    population = document.getElementById('button3'),
    area = document.getElementById('button4'),
    elevation = document.getElementById('button5');

function higherEnd(e) {
    $('#higher_pressed').css({display: 'none'});
    if (data[c1][cat] <= data[c2][cat]) {
        answer = true;
    } else {
        answer = false;
    }
    correct();
}
function lowerEnd(e) {
    $('#lower_pressed').css({display: 'none'});
    if (data[c1][cat] >= data[c2][cat]) {
        answer = true;
    } else {
        answer = false;
    }
    correct();
}
function playEnd(e) {
    $('#button1_pressed').css({display: 'none'});
    init();
}
function categoryEnd(e) {
    $('#button2_pressed').css({display: 'none'});
    toCategory();
}
function populationEnd(e) {
    $('#button3_pressed').css({display: 'none'});
    cat = 2;
    toMenu();
}
function areaEnd(e) {
    $('#button4_pressed').css({display: 'none'});
    cat = 3;
    toMenu();
}
function elevationEnd(e) {
    $('#button5_pressed').css({display: 'none'});
    cat = 4;
    toMenu();
}

window.requestAnimationFrame(gameLoop);

























