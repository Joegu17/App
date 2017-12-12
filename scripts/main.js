/*var db;
function initDB() {
    alert('hje');
    db = window.openDatabase('Database', 1.0, 'AppGame', 2097152);
    db.transaction(createTB, errorCB);
}

function createTB(tx) {
    //tx.executeSql('CREATE TABLE IF NOT EXISTS Data(ID AUTOINCREMENT INTEGER PRIMARY KEY, NAME TEXT, POPULATION INTEGER, CAPITAL_CITY INTEGER, SIZE INTEGER, BORDER INTEGER)');
    tx.executeSql('CREATE TABLE IF NOT EXISTS Data(id, name, population, capital, size, border)');
}
function errorCB(err) {
    alert(err);
}

function insertData() {
    db.transaction(function(tx) {
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [0, 'ch', 8000000, 300000, 40000, 10000], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [1, 'ad', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [2, 'ae', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [3, 'af', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [4, 'ag', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [5, 'ai', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [6, 'al', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [7, 'am', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [8, 'ao', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [9, 'aq', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [10, 'ar', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [11, 'as', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [12, 'at', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [13, 'au', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [14, 'aw', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [15, 'ax', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [16, 'az', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [17, 'ba', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [18, 'bb', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [19, 'bd', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [20, 'be', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [21, 'bf', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [22, 'bg', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [23, 'bh', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [24, 'bi', , , , ], showRecords, handleError);
       tx.executeSql('INSERT INTO Data(id, name, population, capital, size, border) values(?,?,?,?,?,?)', [25, 'bj', , , , ], showRecords, handleError);
    });
}
function showRecords() {
    db.transaction(function(tx) {
       tx.executeSql('SELECT name FROM Data WHERE id = ?', [0], function(tx, results) {
           var name = results.rows.item(0);
           alert(name.name);
       });
    });
}
function handleError(err) {
    alert(err);
}

initDB();
insertData();*/

//[Code, Name, Population, Size]
var data = [                        //http://www.worldometers.info/world-population/population-by-country/
    ['ad', 'Andorra', 76965, 470],
    ['ae', 'United Arab Emirates', 9400145, 83600],
    ['af', 'Afghanistan', 35530081, 652860],
    ['ag', 'Antigua and Barbuda', 102012, 440],
    ['ai', 'Anguilla', 14909, 90],
    ['al', 'Albania', 2930187, 27400],
    ['am', 'Armenia', 2930450, 28470],
    ['ao', 'Angola', 29784193, 1246700],
    ['ar', 'Argentina', 44271041, 2736690],
    ['as', 'American Samoa', 55641, 200],
    ['at', 'Austria', 8735453, 82409],
    ['au', 'Australia', 24450561, 7682300],
    ['aw', 'Aruba', 105264, 180],
    //['ax', 'Âland', , , , , ],
    ['az', 'Azerbaijan', 9827589, 82658],
    ['ba', 'Bosnia and Herzegovina', 3507017, 51000],
    ['bb', 'Barbados', 285719, 430],
    ['bd', 'Bangladesh', 164669751, 130170],
    ['be', 'Belgium', 11429336, 30280],
    ['bf', 'Burkina Faso', 19193382, 273600],
    ['bg', 'Bulgaria', 7084571, 108560],
    ['bh', 'Bahrain', 1492584, 760],
    ['bi', 'Burundi', 10864245, 25680],
    ['bj', 'Benin', 11175692, 112760],
    //['bl', 'Saint Barthélemy', , , , , ],
    ['bm', 'Bermuda', 61349, 50],
    ['bn', 'Brunei Darussalam', 428697, 5270],
    ['bo', 'Bolivia', 11051600, 1083300],
    //['bq', 'Caribbean Netherlands', 25398, 328],
    ['br', 'Brazil', 209288278, 8358140],
    ['bs', 'Bahamas', 395361, 10010],
    ['bt', 'Bhutan', 807610, 38117],
    //['bv', 'Bouvet Island', , , , , ],
    ['bw', 'Botswana', 2291661, 566730],
    ['by', 'Belarus', 9468338, 202910],
    ['bz', 'Belize', 374681, 22810],
    ['ca', 'Canada', 36624199, 9093510],
    //['cc', 'Cocos Islands', , , , , ],
    ['cd', 'Democratic Republic of the Congo', 61339988, 2267050],
    ['cf', 'Central African Republic', 4659080, 622980],
    ['cg', 'Congo', 5260750, 341500],
    ['ch', 'Switzerland', 8476005, 39516],
    ['ci', "Cote D'Ivoire", 24294750, 318000],
    ['ck', 'Cook Islands', 17380, 240],
    ['cl', 'Chile', 18054726, 743532],
    ['cm', 'Cameroon', 24053727, 472710],
    ['cn', 'China', 1409517397, 9388211],
    ['co', 'Colombia', 49065615, 1109500],
    ['cr', 'Costa Rica', 4905769, 51060],
    ['cu', 'Cuba', 11484636, 106440],
    ['cv', 'Cape Verde', 546388, 4030],
    ['cw', 'Curaçao', 160539, 444],
    //['cx', 'Christmas Island', , , , , ],
    ['cy', 'Cyprus', 1179551, 9240],
    ['cz', 'Czech Republic', 10618303, 77240],
    ['de', 'Germany', 82114224, 348560],
    ['dj', 'Djibouti', 956985, 23180],
    ['dk', 'Denmark', 5733551, 42430],
    ['dm', 'Dominica', 73925, 750],
    ['do', 'Dominican Republic', 10766998, 48320],
    ['dz', 'Algeria', 41318142, 2381740],
    ['ec', 'Ecuador', 16624858, 248360],
    ['ee', 'Estonia', 1309632, 42390],
    ['eg', 'Egypt', 97553151, 995450],
    ['eh', 'Western Sahara', 552628, 266000],
    ['er', 'Eritrea', 5068631, 101000],
    ['es', 'Spain', 46354321, 498800],
    ['et', 'Ethiopia', 104957438, 1000000],
    ['fi', 'Finland', 5523231, 303890],
    ['fj', 'Fiji', 905502, 18270],
    ['fk', 'Falkland Islands', 2910, 12170],
    ['fm', 'Micronesia', 105544, 700],
    ['fo', 'Faroe Islands', 49290, 1396],
    ['fr', 'France', 64979548, 547557],
    ['ga', 'Gabon', 2025137, 257670],
    ['gb', 'Great Britain', 66181585, 241930],
    //['gb-eng', '', , , , , ],
    //['gb-nir', '', , , , , ],
    //['gb-sct', '', , , , , ],
    //['gb-wls', '', , , , , ],
    ['gd', 'Grenada', 107825, 340],
    ['ge', 'Georgia', 3912061, 69490],
    ['gf', 'French Guiana', 282731, 82200],
    //['gg', 'Guernsey', , , , , ],
    ['gh', 'Ghana', 28833629, 227540],
    ['gi', 'Gibraltar', 34571, 10],
    ['gl', 'Greenland', 56480, 410450],
    ['gm', 'Gambia', 2100568, 10120],
    ['gn', 'Guinea', 12717176, 245720],
    ['gp', 'Guadeloupe', 449568, 1690],
    ['gq', 'Equatorial Guinea', 1267689, 28050],
    ['gr', 'Greece', 11159773, 128900],
    //['gs', 'South Georgia and South Sandwich Islands', , , , , ],
    ['gt', 'Guatemala', 16913503, 107160],
    ['gu', 'Guam', 164229, 540],
    ['gw', 'Guinea-Bissau', 1861283, 28120],
    ['gy', 'Guyana', 77859, 196850],
    ['hk', 'Hong Kong', 7364883, 1050],
    //['hm', 'Heard and McDonald Islands', , , , , ],
    ['hn', 'Honduras', 9265067, 111890],
    ['hr', 'Croatia', 4189353, 55960],
    ['ht', 'Haiti', 10981229, 27560],
    ['hu', 'Hungary', 9721559, 90530],
    ['id', 'Indonesia', 263991379, 1811570],
    ['ie', 'Ireland', 4761657, 68890],
    ['il', 'Israel', 6321570, 21640],
    ['im', 'Isle of Man', 84287, 570],
    ['in', 'India', 1339180127, 2973190],
    //['io', 'British Indian Ocean Territory', , , , , ],
    ['iq', 'Iraq', 38274618, 434320],
    ['ir', 'Iran', 81162788, 1628550],
    ['is', 'Iceland', 335025, 100250],
    ['it', 'Italy', 59359900, 294140],
    //['je', 'Jersey', , , , , ],
    ['jm', 'Jamaica', 2890299, 10830],
    ['jo', 'Jordan', 9702353, 88780],
    ['jp', 'Japan', 127484450, 364555],
    ['ke', 'Kenya', 49699862, 569140],
    ['kg', 'Kyrgyzstan', 6045117, 191800],
    ['kh', 'Cambodia', 16005373, 176520],
    ['ki', 'Kiribati', 116398, 810],
    ['km', 'Comoros', 813912, 1861],
    ['kn', 'Saint Kitts and Nevis', 55345, 260],
    ['kp', 'North Korea', 25490965, 120410],
    ['kr', 'South Korea', 50982212, 97230],
    ['kw', 'Kuwait', 4136528, 17820],
    ['ky', 'Cayman Islands', 61559, 240],
    ['kz', 'Kazakhstan', 18204499, 2699700],
    ['la', 'Laos', 6858160, 230800],
    ['lb', 'Lebanon', 6082357, 10230],
    ['lc', 'Saint Lucia', 178844, 610],
    ['li', 'Lichtenstein', 37992, 160],
    ['lk', 'Sri Lanka', 20876917, 62710],
    ['lr', 'Liberia', 4731906, 96320],
    ['ls', 'Lesotho', 2233339, 30360],
    ['lt', 'Lithuania', 2890297, 62674],
    ['lu', 'Luxembourg', 583455, 2590],
    ['lv', 'Latvia', 1949670, 62200],
    ['ly', 'Libya', 6374616, 1759540],
    ['ma', 'Morocco', 35739580, 446300],
    ['mc', 'Monaco', 38695, 2],
    ['md', 'Moldova', 4051212, 32850],
    ['me', 'Montenegro', 628960, 13450],
    //['mf', 'Saint Martin', , , , , ],
    ['mg', 'Madagascar', 25570895, 581795],
    ['mh', 'Marshall Islands', 53127, 180],
    ['mk', 'Macedonia', 2083160, 25220],
    ['ml', 'Mali', 18541980, 1220190],
    ['mm', 'Myanmar', 53370609, 653290],
    ['mn', 'Mongolia', 3075647, 1553560],
    ['mo', 'Macau', 622567, 30],
    ['mp', 'Northern Mariana Islands', 55144, 460],
    ['mq', 'Martinique', 384896, 1060],
    ['mr', 'Mauritania', 4420184, 1030700],
    ['ms', 'Montserrat', 5177, 100],
    ['mt', 'Malta', 430835, 320],
    ['mu', 'Mauritius', 1265138, 2030],
    ['mv', 'Maldives', 436330, 300],
    ['mw', 'Malawi', 18622104, 94280],
    ['mx', 'Mexico', 129163276, 1943950],
    ['my', 'Malaysia', 31624264, 328550],
    ['mz', 'Mozambique', 29668834, 786380],
    ['na', 'Namibia', 2533794, 823290],
    ['nc', 'New Caledonia', 276255, 18280],
    ['ne', 'Niger', 21477348, 1266700],
    //['nf', 'Norfolk Island', , , , , ],
    ['ng', 'Nigeria', 190886311, 910770],
    ['ni', 'Nicaragua', 6217581, 120340],
    ['nl', 'Netherlands', 17035938, 33720],
    ['no', 'Norway', 5305383, 365268],
    ['np', 'Nepal', 29304998, 143350],
    ['nr', 'Nauru', 11359, 20],
    ['nu', 'Niue', 1618, 260],
    ['nz', 'New Zealand', 4705818, 263310],
    ['om', 'Oman', 4636262, 309500],
    ['pa', 'Panama', 4098587, 74340],
    ['pe', 'Peru', 32165485, 1280000],
    ['pf', 'French Polynesia', 283007, 3660],
    ['pg', 'Papua New Guinea', 8251162, 452860],
    ['ph', 'Philippines', 104918090, 298170],
    ['pk', 'Pakistan', 197015955, 770880],
    ['pl', 'Poland', 38170712, 306230],
    ['pm', 'St. Pierre and Miquelon', 6320, 230],
    //['pn', 'Pitcairn', , , , , ],
    ['pr', 'Puerto Rico', 3663131, 8870],
    //['ps', 'Palestine', , , , , ],
    ['pt', 'Portugal', 10329506, 91590],
    ['pw', 'Palau', 21729, 460],
    ['py', 'Paraguay', 6811297, 397300],
    ['qa', 'Qatar', 2639211, 11610],
    ['re', 'Réunion', 876562, 2500],
    ['ro', 'Romania', 19679306, 230170],
    ['rs', 'Serbia', 8790574, 87460],
    ['ru', 'Russia', 143989754, 16376870],
    ['rw', 'Rwanda', 12208407, 24670],
    ['sa', 'Saudi Arabia', 32938213, 2149690],
    ['sb', 'Solomon Islands', 611343, 27990],
    ['sc', 'Seychelles', 94737, 460],
    ['sd', 'Sudan', 40533330, 1765048],
    ['se', 'Sweden', 9910701, 410340],
    ['sg', 'Singapore', 5708844, 700],
    ['sh', 'St. Helena', 4049, 390],
    ['si', 'Slovenia', 2079976, 20140],
    //['sj', 'Svalbard and Jan Mayen Islands', , , , , ],
    ['sk', 'Slovakia', 5447662, 48088],
    ['sl', 'Sierra Leone', 7557212, 72180],
    ['sm', 'San Marino', 33400, 60],
    ['sn', 'Senegal', 15850567, 192530],
    ['so', 'Somalia', 14742523, 627340],
    ['sr', 'Suriname', 563402, 156000],
    ['ss', 'South Sudan', 12575714, 610952],
    ['st', 'Sao Tome and Principe', 204327, 960],
    ['sv', 'El Salvador', 6377853, 20720],
    ['sx', 'Sint Maarten', 40120, 34],
    ['sy', 'Syria', 18269868, 183630],
    ['sz', 'Swaziland', 1367254, 17200],
    ['tc', 'Turks and Caicos Islands', 35446, 950],
    ['td', 'Chad', 14899994, 1259200],
    //['tf', 'French Southern Territories', , , , , ],
    ['tg', 'Togo', 7797694, 54390],
    ['th', 'Thailand', 69037513, 510890],
    ['tj', 'Tajikistan', 8921343, 139960],
    ['tk', 'Tokelau', 1300, 10],
    ['tl', 'East Timor', 1296311, 14870],
    ['tm', 'Turkmenistan', 5758075, 469930],
    ['tn', 'Tunisia', 11532127, 155360],
    ['to', 'Tonga', 108020, 720],
    ['tr', 'Turkey', 80745020, 769630],
    ['tt', 'Trinidad and Tobago', 11532127, 155360],
    ['tv', 'Tuvalu', 11192, 30],
    ['tw', 'Taiwan', 23626456, 35410],
    ['tz', 'Tanzania', 57310019, 885800],
    ['ua', 'Ukraine', 44222947, 579320],
    ['ug', 'Uganda', 42862958, 199810],
    //['um', 'US Minor Outlying Islands', , , , , ],
    ['us', 'United States of America', 324459463, 9147420],
    ['uy', 'Uruguay', 3456750, 175020],
    ['uz', 'Uzbekistan', 31910641, 425400],
    ['va', 'Vatican City State', 792, 1],
    ['vc', 'Saint Vincent and the Grenadines', 109897, 390],
    ['ve', 'Venezuela', 31977065, 882050],
    ['vg', 'British Virgin Islands', 31196, 150],
    ['vi', 'U.S. Virgin Islands', 104901, 350],
    ['vn', 'Viet Nam', 95540800, 310070],
    ['vu', 'Vanuatu', 276244, 12190],
    ['wf', 'Wallis and Futuna Islands', 11773, 140],
    ['ws', 'Samoa', 196440, 2830],
    ['ye', 'Yemen', 28250420, 527970],
    ['yt', 'Mayotte', 253045, 375],
    ['za', 'South Africa', 56717156, 97230],
    ['zm', 'Zambia', 17094130, 743390],
    ['zw', 'Zimbabwe', 16529904, 386850],
]

var c1 = getRandomInt(0, data.length - 1),
    c2 = getRandomInt(0, data.length - 1),
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
div1.style.top = "0px";
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
div2.style.top = "50%";
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

$('#text1').html(data[c1][1]);
$('#text3').html(data[c1][2].toLocaleString());
$('#text5').html(data[c2][1]);

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
    changingDiv = 1;

var higher = document.getElementById('higher'),
    lower = document.getElementById('lower');

higher.addEventListener('touchstart', higherStart);
higher.addEventListener('touchend', higherEnd);
lower.addEventListener('touchstart', lowerStart);
lower.addEventListener('touchend', lowerEnd);

function higherStart() {
    $('#higher_pressed').css({display: 'inherit'});
}
function higherEnd(e) {
    $('#higher_pressed').css({display: 'none'});
    if (data[c1][2] <= data[c2][2]) {
        answer = true;
    } else {
        answer = false;
    }
    correct();
}

function lowerStart() {
    $('#lower_pressed').css({display: 'inherit'});
}
function lowerEnd(e) {
    $('#lower_pressed').css({display: 'none'});
    if (data[c1][2] >= data[c2][2]) {
        answer = true;
    } else {
        answer = false;
    }
    correct();
}

function correct() {
    $('#text9').css({display: 'none'});
    $('#text10').css({display: 'none'});
    $('#higher').css({display: 'none'});
    $('#lower').css({display: 'none'});
    $('#text7').css({display: 'inherit'});
    
    plusPoints = data[c2][2]/120;
    countingPoints = 0;
    $('#text7').html(countingPoints.toLocaleString());
    countActive = true;
}

function moveCountry() {
    $('#div1').css({'transition-duration': '1s'});
    $('#div2').css({'transition-duration': '1s'});
    $('#div3').css({'transition-duration': '1s'});
    $('#div1').css('transform', 'translate3d(0px, -100%, 0px)');
    $('#div2').css('transform', 'translate3d(0px, -100%, 0px)');
    $('#div3').css('transform', 'translate3d(0px, -100%, 0px)');
    window.setTimeout(getNewCountry, 1000);
}

function getNewCountry() {
    c1 = c2;
    c2 = c3;
    c3 = getRandomInt(0, data.length - 1);
    while (c3 == c2 || c3 == c1) {
        c3 = getRandomInt(0, data.length - 1);
    }
    
    var elem = document.getElementById("div"+changingDiv);
    return elem.parentNode.removeChild(elem);
    alert('hefe');
    
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
    document.getElementById("background").appendChild(div);
    
    changingDiv++;
    if (changingDiv == 4) {
        changingDiv = 1;
    }
    
    $('#text1').html(data[c1][1]);
    $('#text3').html(data[c1][2].toLocaleString());
    $('#text5').html(data[c2][1]);
    
    $('#text9').css({display: 'inherit'});
    $('#text10').css({display: 'inherit'});
    $('#higher').css({display: 'inherit'});
    $('#lower').css({display: 'inherit'});
    $('#text7').css({display: 'none'});
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
            if (countingPoints >= data[c2][2]) {
                countActive = false;
                countingPoints = data[c2][2];
                $('#text7').html(Math.floor(countingPoints).toLocaleString());
                if (answer) {
                    window.setTimeout(moveCountry, 1000);
                } else {
                    return;
                }
            } else {
                $('#text7').html(Math.floor(countingPoints).toLocaleString());
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

alert('hefe');
window.requestAnimationFrame(gameLoop);

























