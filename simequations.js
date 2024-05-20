let putput = document.querySelector("#output");

function calculate() {
    let a = document.querySelector("#a").value;
    let b = document.querySelector("#b").value;
    let c = document.querySelector("#c").value;
    let d = document.querySelector("#d").value;
    let e = document.querySelector("#e").value;
    let f = document.querySelector("#f").value;
    let g = a;
    let h = d;
    a = a*h;
    b = b*h;
    c = c*h;
    d = d*g;
    e = e*g;
    f = f*g;
    g = c-f;
    h = g/(b-e);
    g = c-b*h;
    let i = g/a
    output.innerText = `x = ${i} y = ${h}`;
}
