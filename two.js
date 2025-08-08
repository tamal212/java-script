//js event
function one() {
  document.getElementById('but').innerHTML = 'done';
  document.getElementById('but').style.backgroundColor='#3498db';
}

function button() {
  document.getElementById('button').innerHTML = 'hello';

}
function like() {
  document.getElementById('like').innerHTML = '<i class="fa-solid fa-thumbs-up"></i>liked';
}
function ok(){
  document.getElementById('ok').innerHTML = 'hello';
 //document.getElementById('ok').style.color = '#ffffff';
}
/*function of() { document.getElementById('lili').style.width = '100px'; }*/
document.getElementById('large').addEventListener('click', function (pf) {
  document.getElementById('content').style.color = '#f24fa3';
  document.getElementById('content').style.fontFamily = 'cursive';
}, false);