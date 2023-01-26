const n3b=784802013000;
let uval; let percent;
let val=Math.ceil((Date.now()-n3b)/86400000);
let d;let m;let y;

function loadStreak() {
  document.querySelector('.value_text').firstElementChild.innerText=val.toLocaleString();
};
// function inputActive(i) {
//   switch(i) {
//     case 0:
//       e=document.getElementById('user_input_d');
//       e.style.color='white'
//       if (e.value>=1&&e.value<=31){
//         return;
//       };
//       e.value='';
//       return;
//     case 1:
//       e=document.getElementById('user_input_m');
//       e.style.color='white'
//       if (e.value>=1&&e.value<=12){
//         return;
//       };
//       e.value='';
//       return;
//     case 2:
//       e=document.getElementById('user_input_y');
//       e.style.color='white'
//       if (e.value>=1&&e.value<=4096){
//         return;
//       };
//       e.value='';
//       return;
//   }
// };
function showUserInput() {
  d=document.getElementById('user_input_d');
  m=document.getElementById('user_input_m');
  y=document.getElementById('user_input_y');
  document.getElementById('user_select').style.display='none';
  document.getElementById('user').style.display='unset';
  document.getElementById('user_streak').style.display='none';
}
function calcUser() {
  // if (d.checkValidity()==false||d.value==''){
  //   d.style.borderColor='#aa3333'
  // }
  // if (m.checkValidity()==false||d.value==''){
  //   m.style.borderColor='#aa3333'
  // }
  // if (y.checkValidity()==false||d.value==''){
  //   y.style.borderColor='#aa3333'
  // }
  if (d.checkValidity()==true&&d.value&&m.checkValidity()==true&&m.value&&y.checkValidity()==true&&y.value){
    document.getElementById('user').style.display='none';
    document.getElementById('user_streak').style.display='grid';
    uval=Math.ceil((Date.now()-Date.UTC(y.value, m.value-1, d.value))/86400000)
    document.getElementById('value2').innerText=uval.toLocaleString()
    percent=(uval/val)*100
    document.getElementById('user_percent').innerText = percent.toFixed(2)+'%'
  }
  return percent;
}