let calc = document.querySelector("#calc");
let out = document.querySelector("#output");
function calculate() {
  console.log("leboop")
  let a = document.querySelector("#a").value;
  let b = document.querySelector("#b").value;
  let c = document.querySelector("#c").value;
  let d = document.querySelector("#d").value;
  let e = document.querySelector("#e").value;
  let f;
  let g;
  if((b-a) == (c-b)) {
    f = b-a;
    g = (a-(b-a));
    out.innerText = `${f}n+${g}`;
  }
  else if (((b-a)-(c-b) == ((c-b)-(d-c))){
    f = ((b-a)-(c-b))/2;
    g = a-(((b-a)-(c-b))/2)**;
    out.innerText = `${f}n²+${g}`;
  }
  else {
    out.innerText = "cant do that idiot";
  }
}
