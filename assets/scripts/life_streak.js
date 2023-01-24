const n3b=784802013000;
let val=Math.ceil((Date.now()-n3b)/86400000);

function loadStreak() {
  document.querySelector('.value_text').firstElementChild.innerText=val.toLocaleString();
};
