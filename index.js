var num = Math.floor(Math.random()*100);
console.log(num);

var now = new Date();
var time = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();

var dd = now.getDate();

var mm = now.getMonth()+1; 
var yyyy = now.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 

now = time + ' ' + mm+'/'+dd+'/'+yyyy;
console.log(now);

var names = ['Kevin','Austin','Johan','Anthony','Coral','Xira','Fernando','Alex','Angelo','Mahfuz','Aziz','Raishan','Kayahma','Imani']
console.log(names)

var teachers = {
    'teacher1': {
        firstname: 'Abe',
        lastname:'Peterkin',
    },
    'teacher2': {
        firstname: 'Yining',
        lastname:'Chen',
    },
    'teacher3': {
        firstname:'Moshe',
    },
    'teacher4': {
        firstname: 'Matt',
        lastname: 'Armstrong',
    },
    'teacher5': {
        firstname: 'Peter',
        lastname: 'Jablonski',
    },
};

function log(string){
    console.log(string);
}
log("Apple")

function randInt(min,max){
	var range = max - min;
	var rand = Math.floor(Math.random() * (range + 1));
	return min + rand;
}


var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

function numberWords (num) {
    if ((num = num.toString()).length > 9) return 'overflow';
    var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
    if (!n) return; var str = '';
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
    str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) : '';
    return str;
}

console.log(numberWords(randInt(1,100)));

for (var i = 0; i < names.length; i++) { 
      log(names[i]);
}

function oddEven(container){
  if (container.length % 2 !== 0){
    log('The students are kind of odd.');
  } else {
    log('The class is very even.');
  }
}
oddEven(names);

while (randInt(1,100) % 7 !== 0){
  log(randInt(1,100))
}